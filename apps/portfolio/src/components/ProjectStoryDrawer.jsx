import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Clock,
  ExternalLink,
  Github,
  Play,
  Check,
  Copy,
  Terminal,
  Zap,
  Sparkles
} from "lucide-react";

export default function ProjectStoryDrawer({ project, isOpen, onClose }) {
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project || !project.story) return null;

  const { story } = project;

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            aria-label="Close modal overlay"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.8 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0d0e12] border-l border-white/10 h-full flex flex-col shadow-2xl z-10 overflow-hidden"
          >
            {/* Top Accent Gradient Bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor || "from-neon-blue to-neon-pink"}`} />

            {/* Sticky Drawer Header */}
            <div className="p-6 border-b border-white/10 bg-[#0d0e12]/95 backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider border border-neon-green/40 text-neon-green bg-neon-green/10">
                  <Sparkles size={11} className="text-neon-green" />
                  {story.badge || "BEHIND THE BUILD"}
                </span>
                {story.readTime && (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-gray-400">
                    <Clock size={12} />
                    {story.readTime}
                  </span>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer group"
                title="Close (Esc)"
                aria-label="Close drawer"
              >
                <X size={18} className="group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Scrollable Story Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 text-gray-200">
              {/* Project Origin & Headline */}
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-neon-blue font-semibold mb-2">
                  {project.title} • {project.category}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug break-words">
                  {story.headline}
                </h2>
              </div>

              {/* Custom Flexible Sections */}
              {story.sections?.map((section, idx) => (
                <div key={idx} className="space-y-3 pt-4 border-t border-white/5 first:border-0 first:pt-0">
                  {section.heading && (
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {section.heading}
                      </h3>
                    </div>
                  )}

                  {section.body && (
                    <p className="text-sm leading-relaxed text-gray-300 font-normal">
                      {section.body}
                    </p>
                  )}

                  {/* Optional Callout / Insight Box */}
                  {section.callout && (
                    <div className="p-4 rounded-xl bg-neon-blue/5 border border-neon-blue/20 text-xs sm:text-sm text-cyan-200 flex items-start gap-3 my-3">
                      <Zap size={16} className="text-neon-blue shrink-0 mt-0.5" />
                      <div className="leading-relaxed font-medium">
                        {section.callout}
                      </div>
                    </div>
                  )}

                  {/* Optional Code Snippet Block */}
                  {section.codeSnippet && (
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 my-4 shadow-lg">
                      <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-2">
                          <Terminal size={12} className="text-neon-green" />
                          <span>{section.codeSnippet.title || "Snippet"}</span>
                        </div>
                        <button
                          onClick={() => handleCopyCode(section.codeSnippet.code, idx)}
                          className="flex items-center gap-1 text-[11px] hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedCodeId === idx ? (
                            <>
                              <Check size={12} className="text-neon-green" />
                              <span className="text-neon-green">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 text-xs font-mono text-gray-200 overflow-x-auto leading-relaxed">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Optional Takeaway Highlights */}
                  {section.bullets && (
                    <ul className="space-y-2 mt-2">
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-neon-green font-bold">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Sticky Drawer Footer with Direct Actions */}
            <div className="p-5 border-t border-white/10 bg-[#0d0e12] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-neon-blue to-neon-pink text-black hover:opacity-90 transition-all cursor-pointer active:scale-95"
                  >
                    <Play size={12} className="fill-black" />
                    <span>Try Live Tool</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/30 transition-all active:scale-95"
                  >
                    <Github size={13} />
                    <span>Inspect Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                Close Story [Esc]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
