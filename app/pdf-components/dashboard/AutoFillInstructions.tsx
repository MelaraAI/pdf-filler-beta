'use client';

import { memo, useCallback, useEffect, useState } from 'react';
import { Wand2 } from 'lucide-react';

interface Props {
  instructions: string;
  setInstructions: (s: string) => void;
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
}

const AutoFillInstructions = memo(function AutoFillInstructions({
  instructions,
  setInstructions,
  disabled,
  colorTheme,
  userId,
}: Props) {
  const [aiLoading, setAiLoading] = useState(false);

  // Handler for Fill with AI button
  const handleFillWithAI = async () => {
  setAiLoading(true);
  try {
    await fetch('https://n8n-9a4w.onrender.com/webhook/7305bc7d-f574-48b1-8a32-7bdf4641328c', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instructions,
        userId, // send user ID to n8n
      }),
    });
  } catch (err) {
    console.error(err);
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
            <div
              id="voice-widget-inline"
              className="h-[50px] min-h-[20px] w-[100px] flex items-center justify-center bg-white/30 dark:bg-slate-800/30 backdrop-blur-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  ); 
});

export default AutoFillInstructions;
