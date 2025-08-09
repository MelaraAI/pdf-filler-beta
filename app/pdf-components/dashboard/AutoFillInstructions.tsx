'use client';

import { memo, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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
}

const AutoFillInstructions = memo(function AutoFillInstructions({
  instructions,
  setInstructions,
  autoFill,
  disabled,
  colorTheme,
}: Props) {
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
    <motion.div 
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        boxShadow: colorTheme ? `0 20px 40px ${colorTheme.primary}20` : "0 20px 40px rgba(59, 130, 246, 0.1)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div 
        className="p-4 backdrop-blur-sm border-b border-white/20 dark:border-slate-700/30 flex items-center"
        style={{
          background: colorTheme 
            ? `linear-gradient(135deg, ${colorTheme.primary}15, ${colorTheme.secondary}15)`
            : 'linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(219, 234, 254, 0.9))'
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles 
            className="w-5 h-5 mr-2"
            style={{ color: colorTheme?.primary || '#3b82f6' }}
          />
        </motion.div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Auto-Fill Instructions
        </h2>
      </motion.div>
      <div className="p-6 flex-1 flex flex-col overflow-hidden">
        <motion.textarea
          value={instructions}
          onChange={handleInstructionsChange}
          placeholder={`Enter field-value pairs, one per line. Examples:\nNamed Insured: Vincent Melara\nRequested Effective Date: 01/15/2024\nCompany Phone: (555) 123-4567\nPhysical U.S. Address: 123 Main St, City, ST 12345\n\nYou can also manually edit fields below and click 'Apply Changes to PDF' to update the document preview.`}
          className="w-full flex-1 border border-slate-300/50 dark:border-slate-600/50 rounded-lg p-4 text-sm bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
        <motion.p 
          className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Use format: &quot;Field Name: Value&quot; or &quot;Field Name = Value&quot;, one per line.
          Click &quot;Apply Changes to PDF&quot; to update the preview with all field values.
        </motion.p>

        {/* Flex row for button and voice widget */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {autoFill && (
            <motion.button
              onClick={autoFill}
              disabled={disabled}
              className="w-full sm:w-auto text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/10"
              style={{
                background: colorTheme 
                  ? `linear-gradient(135deg, ${colorTheme.accent}, ${colorTheme.secondary})`
                  : 'linear-gradient(135deg, #0d9488, #06b6d4)',
                boxShadow: colorTheme ? `0 10px 30px ${colorTheme.accent}20` : '0 10px 30px rgba(13, 148, 136, 0.2)'
              }}
              whileHover={{ scale: disabled ? 1 : 1.05 }}
              whileTap={{ scale: disabled ? 1 : 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              Apply Changes to PDF
            </motion.button>
          )}

          {/* Voice widget container */}
          <motion.div
            id="voice-widget-inline"
            className="min-h-[60px] w-full sm:w-[300px] flex items-center justify-center bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-lg border border-white/20 dark:border-slate-700/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
});

export default AutoFillInstructions;
