'use client';

import { memo, useCallback, useEffect, useState, useRef } from 'react';
import { Wand2, Mic, Square } from 'lucide-react';

interface Props {
  instructions: string;
  setInstructions: (s: string | ((prev: string) => string)) => void;
  autoFill?: () => void;
  disabled: boolean;
  colorTheme?: {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  userId?: string;
  signedUrl?: string | null;
  fileName?: string | null;
}

const AutoFillInstructions = memo(function AutoFillInstructions({
  instructions,
  setInstructions,
  disabled,
  colorTheme,
  userId,
  signedUrl,
  fileName,
}: Props) {
  const [aiLoading, setAiLoading] = useState(false);
  
  // Voice recording state
  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const recognitionRef = useRef<unknown | null>(null);
  const interimTranscriptRef = useRef<string>('');
  const finalTranscriptRef = useRef<string>('');
  const manualStopRef = useRef<boolean>(false);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
          setRecording(true);
          setTranscribing(false);
        };
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';
          
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript;
            } else {
              interimTranscript += transcript;
            }
          }
          
          // Update the instructions field in real-time using callback to get current state
          setInstructions((currentInstructions: string) => {
            const baseInstructions = currentInstructions
              .replace(interimTranscriptRef.current, '')
              .replace(finalTranscriptRef.current, '');
            
            if (finalTranscript) {
              finalTranscriptRef.current += finalTranscript;
              return baseInstructions + finalTranscriptRef.current + interimTranscript;
            } else if (interimTranscript) {
              interimTranscriptRef.current = interimTranscript;
              return baseInstructions + finalTranscriptRef.current + interimTranscript;
            }
            
            return currentInstructions;
          });
        };
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          // Don't stop on no-speech or audio-capture errors, just continue
          if (event.error === 'no-speech' || event.error === 'audio-capture') {
            console.log('Ignoring no-speech/audio-capture error');
            return;
          }
          
          setRecording(false);
          setTranscribing(false);
          manualStopRef.current = true; // Prevent auto-restart after error
          alert(`Speech recognition error: ${event.error}`);
        };
        
        recognition.onend = () => {
          console.log('🏁 Speech recognition ended. Manual stop flag:', manualStopRef.current);
          
          // Check if this was a manual stop
          if (manualStopRef.current) {
            console.log('✋ Manual stop detected - ending recognition permanently');
            setRecording(false);
            setTranscribing(false);
            
            // Clean up transcript refs
            interimTranscriptRef.current = '';
            finalTranscriptRef.current = '';
            
            // Reset the manual stop flag for next session
            setTimeout(() => {
              manualStopRef.current = false;
              console.log('🔄 Manual stop flag reset for next session');
            }, 500);
          } else {
            // Only auto-restart if not manually stopped
            console.log('🔄 Auto-restarting recognition (not manually stopped)');
            setTimeout(() => {
              try {
                // Double-check that we still shouldn't stop
                if (!manualStopRef.current && recognitionRef.current) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (recognitionRef.current as any).start();
                  console.log('✅ Recognition restarted successfully');
                }
              } catch (error) {
                console.error('❌ Failed to restart speech recognition:', error);
                setRecording(false);
                setTranscribing(false);
                // Clean up transcript refs on restart failure
                interimTranscriptRef.current = '';
                finalTranscriptRef.current = '';
              }
            }, 100); // Small delay to avoid conflicts
          }
        };
        
        recognitionRef.current = recognition;
      }
    }
  }, [setInstructions]); // Only depend on setInstructions callback

  // Cleanup effect to stop recording when component unmounts
  useEffect(() => {
    return () => {
      if (recognitionRef.current && recording) {
        console.log('🧹 Component unmounting - stopping speech recognition');
        manualStopRef.current = true;
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (recognitionRef.current as any).stop();
        } catch (error) {
          console.error('Error stopping recognition on unmount:', error);
        }
      }
    };
  }, [recording]);

  // Voice recording functions
  const startRecording = async () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }
    
    try {
      console.log('🎤 Starting speech recognition...');
      
      // Reset transcript refs and manual stop flag
      interimTranscriptRef.current = '';
      finalTranscriptRef.current = '';
      manualStopRef.current = false;
      
      // Update UI state immediately
      setRecording(true);
      setTranscribing(false);
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (recognitionRef.current as any).start();
      console.log('✅ Speech recognition start() called successfully');
    } catch (error) {
      console.error('❌ Failed to start speech recognition:', error);
      // Reset UI state on error
      setRecording(false);
      setTranscribing(false);
      alert('Failed to start speech recognition. Please try again.');
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      console.log('🛑 Stop button clicked - manual stop initiated');
      
      // Set manual stop flag FIRST and ensure it's set
      manualStopRef.current = true;
      
      // Force UI update immediately
      setRecording(false);
      setTranscribing(false);
      
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (recognitionRef.current as any).stop();
        console.log('✅ Speech recognition stop() called successfully');
      } catch (error) {
        console.error('❌ Error stopping speech recognition:', error);
      }
      
      // Additional safety: clear refs after a short delay to ensure cleanup
      setTimeout(() => {
        interimTranscriptRef.current = '';
        finalTranscriptRef.current = '';
        console.log('🧹 Transcript refs cleared');
      }, 100);
    } else {
      console.warn('⚠️ No recognition instance to stop');
    }
  };

  // Handler for Fill with AI button
  const handleFillWithAI = async () => {
  setAiLoading(true);
  
  // Debug logging for production
  console.log('🚀 Sending to n8n:', {
    instructions: instructions?.length ? `${instructions.substring(0, 50)}...` : 'empty',
    fileName,
    userId,
    signedUrl: signedUrl ? `${signedUrl.substring(0, 50)}...` : 'null',
    environment: process.env.NODE_ENV
  });
  
  try {
    const response = await fetch('https://n8n-9a4w.onrender.com/webhook/7305bc7d-f574-48b1-8a32-7bdf4641328c', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instructions,
        fileName,
        userId, // send user ID to n8n
        signedUrl, // send signed URL to n8n 
      }),
    });
    
    console.log('🎯 n8n response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ n8n error response:', errorText);
    } else {
      console.log('✅ n8n webhook successful');
    }
    
  } catch (err) {
    console.error('💥 n8n fetch error:', err);
  } finally {
    setAiLoading(false);
  }
};
  const handleInstructionsChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInstructions(e.target.value);
    },
    [setInstructions]
  );

  // Inject the ElevenLabs widget dynamically
  /* 
  useEffect(() => {
    const container = document.getElementById('voice-widget-inline');
    if (!container) return;

    container.innerHTML = '';

    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', 'agent_2601k19e0awtegzbav9nh55vph4w');
    widget.setAttribute('show-branding', 'false');
    widget.style.width = '135%';
    widget.style.height = '120px';
    widget.style.margin = 'auto';

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';

    container.appendChild(widget);
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);
  */

  return (
    <div
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 overflow-hidden h-full flex flex-col transition-shadow duration-500 hover:shadow-2xl"
    >
      <div
        className="p-4 backdrop-blur-sm border-b border-white/20 dark:border-slate-700/30 flex items-center"
        style={{
          background: colorTheme 
            ? `linear-gradient(135deg, ${colorTheme.primary}15, ${colorTheme.secondary}15)`
            : 'linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(219, 234, 254, 0.9))'
        }}
      >
        <Wand2 
          className="w-5 h-5 mr-2"
          style={{ color: colorTheme?.primary || '#3b82f6' }}
        />
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Auto-Fill Instructions
        </h2>
      </div>

      <div className="p-6 flex-1 flex flex-col overflow-hidden">
        <textarea
          value={instructions}
          onChange={handleInstructionsChange}
          placeholder={`Enter field-value pairs, one per line. Examples:\nNamed Insured: Vincent Melara\nRequested Effective Date: 01/15/2024\nCompany Phone: (555) 123-4567\nPhysical U.S. Address: 123 Main St, City, ST 12345\n\nYou can also manually edit fields below and click 'Apply Changes to PDF' to update the document preview.`}
          className="w-full flex-1 border border-slate-300/50 dark:border-slate-600/50 rounded-lg p-4 text-sm bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
        />

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
          Use format: &quot;Field Name: Value&quot; or &quot;Field Name = Value&quot;, one per line.
          Click &quot;Apply Changes to PDF&quot; to update the preview with all field values.
        </p>

        {/* Flex row for button and voice widget */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleFillWithAI}
              disabled={disabled || aiLoading}
              className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-shadow duration-500 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/10 text-white"
              style={{
                background: colorTheme 
                  ? `linear-gradient(135deg, ${colorTheme.accent}, ${colorTheme.secondary})`
                  : 'linear-gradient(135deg, #0d9488, #06b6d4)',
                boxShadow: colorTheme ? `0 10px 30px ${colorTheme.accent}20` : '0 10px 30px rgba(13, 148, 136, 0.2)'
              }}
            >
              <Wand2 className={`w-5 h-5${aiLoading ? ' animate-spin' : ''}`} />
              {aiLoading ? 'Filling...' : 'Fill with AI'}
            </button>
            {/* Voice widget container */}
            {/* 
            <div
              id="voice-widget-inline"
              className="h-[50px] min-h-[20px] w-[100px] flex items-center justify-center bg-white/30 dark:bg-slate-800/30 backdrop-blur-md rounded-lg"
            />
            */}
            
            {/* Microphone button */}
            <button
              onClick={recording ? stopRecording : startRecording}
              disabled={transcribing}
              className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 dark:border-slate-600/20 hover:scale-105 ${
                recording ? 'animate-pulse' : ''
              } ${transcribing ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{
                background: recording
                  ? colorTheme 
                    ? `linear-gradient(135deg, #ef4444, #dc2626)`
                    : 'linear-gradient(135deg, #ef4444, #dc2626)'
                  : colorTheme 
                    ? `linear-gradient(135deg, ${colorTheme.primary}20, ${colorTheme.secondary}20)`
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2))'
              }}
              title={
                transcribing 
                  ? "Transcribing..." 
                  : recording 
                    ? "Stop Recording" 
                    : "Start Voice Input"
              }
            >
              {transcribing ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : recording ? (
                <Square 
                  className="w-4 h-4" 
                  style={{ color: '#ffffff' }}
                />
              ) : (
                <Mic 
                  className="w-5 h-5" 
                  style={{ color: colorTheme?.primary || '#3b82f6' }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  ); 
});

export default AutoFillInstructions;
