import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Edit3 } from 'lucide-react';

export interface FormField {
  id: string;
  name: string;
  value: string | boolean | string[];
  type: 'text' | 'checkbox' | 'radio' | 'dropdown';
  options?: string[];
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  formFields: FormField[];
  updateFieldValue: (id: string, value: string | boolean | string[]) => void;
  colorTheme?: {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

const ManualFieldEditor = memo(function ManualFieldEditor({ formFields, updateFieldValue, colorTheme }: Props) {
  const renderField = useCallback((field: FormField) => {
    switch (field.type) {
      case 'checkbox':
        return (
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-600/50">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={field.value as boolean}
                onChange={(e) => updateFieldValue(field.id, e.target.checked)}
                className="rounded border-slate-300 dark:border-slate-600 focus:ring-2"
                style={{ 
                  color: colorTheme?.primary || '#3b82f6',
                  '--tw-ring-color': `${colorTheme?.primary || '#3b82f6'}80`
                } as React.CSSProperties}
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{field.name}</span>
            </label>
          </div>
        );

      case 'radio':
        return (
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-600/50">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">{field.name}</label>
            <div className="space-y-3">
              {field.options?.map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name={field.id}
                    value={option}
                    checked={field.value === option}
                    onChange={(e) => updateFieldValue(field.id, e.target.value)}
                    className="border-slate-300 dark:border-slate-600 focus:ring-2"
                    style={{ 
                      color: colorTheme?.primary || '#3b82f6',
                      '--tw-ring-color': `${colorTheme?.primary || '#3b82f6'}80`
                    } as React.CSSProperties}
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'dropdown':
        return (
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-600/50">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{field.name}</label>
            <select
              value={Array.isArray(field.value) ? field.value[0] || '' : field.value as string}
              onChange={(e) => updateFieldValue(field.id, e.target.value)}
              className="w-full border border-slate-300/50 dark:border-slate-600/50 rounded-lg px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 transition-all duration-300 text-slate-900 dark:text-white"
              style={{
                '--tw-ring-color': `${colorTheme?.primary || '#3b82f6'}50`,
                borderColor: `${colorTheme?.primary || '#3b82f6'}30`
              } as React.CSSProperties}
            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );

      default: // text
        return (
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-600/50">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{field.name}</label>
            <input
              type="text"
              value={field.value as string}
              onChange={(e) => updateFieldValue(field.id, e.target.value)}
              className="w-full border border-slate-300/50 dark:border-slate-600/50 rounded-lg px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:ring-2 transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
              style={{
                '--tw-ring-color': `${colorTheme?.primary || '#3b82f6'}50`,
                borderColor: `${colorTheme?.primary || '#3b82f6'}30`
              } as React.CSSProperties}
              placeholder={`Enter ${field.name.toLowerCase()}`}
            />
          </div>
        );
    }
  }, [updateFieldValue, colorTheme]);

  return (
    <motion.div 
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{
        boxShadow: colorTheme ? `0 20px 40px ${colorTheme.primary}20` : "0 20px 40px rgba(59, 130, 246, 0.1)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div 
        className="p-4 backdrop-blur-sm border-b border-white/20 dark:border-slate-700/30 flex items-center"
        style={{
          background: colorTheme 
            ? `linear-gradient(135deg, ${colorTheme.primary}15, ${colorTheme.accent}15)`
            : 'linear-gradient(135deg, rgba(248, 250, 252, 0.9), rgba(224, 231, 255, 0.9))'
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.6 }}
        >
          <Edit3 
            className="w-5 h-5 mr-2"
            style={{ color: colorTheme?.accent || '#6366f1' }}
          />
        </motion.div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Manual Field Editor</h2>
      </motion.div>
      <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
        {formFields.length === 0 ? (
          <motion.p 
            className="text-slate-500 dark:text-slate-400 text-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            No form fields found. Upload a PDF with form fields to get started.
          </motion.p>
        ) : (
          formFields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {renderField(field)}
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
});

export default ManualFieldEditor;