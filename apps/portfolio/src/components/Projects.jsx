import { useState } from "react";
import { motion } from "motion/react";
import {
    Github,
    ShieldCheck,
    ShoppingCart,
    Utensils,
    CheckCircle2,
    Sparkles,
    ArrowUpRight,
    Play,
    Zap,
    Smartphone,
    BookOpen
} from "lucide-react";
import ProjectStoryDrawer from "./ProjectStoryDrawer";

const projectsData = [
    {
        id: "ecommerce-system",
        title: "Online Store Platform",
        category: "ONLINE STORE",
        icon: ShoppingCart,
        accentColor: "from-purple-500 to-indigo-500",
        badgeColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
        tagline: "High-speed storefront with real-time stock sync and instant checkout.",
        stack: ["PHP & Laravel", "React", "MySQL", "Tailwind CSS"],
        highlights: [
            "Instant Reactive Cart",
            "Real-Time Stock Locks",
            "Safe Customer Auth",
            "Mobile-First Design"
        ],
        sourceUrl: "https://github.com/iamjothees",
        liveUrl: null, // Hidden since no standalone live demo URL is deployed yet
        previewBadge: "GitHub Repo Available"
    },
    {
        id: "food-ordering-app",
        title: "Food Ordering & Delivery App",
        category: "ORDERING APP",
        icon: Utensils,
        accentColor: "from-orange-500 to-red-500",
        badgeColor: "border-orange-500/40 text-orange-400 bg-orange-500/10",
        tagline: "Live kitchen dispatch and meal tracking from chef's pan to your door.",
        stack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
        highlights: [
            "Live Scooter & Order Tracking",
            "Instant Meal Customizer",
            "Rush-Hour Load Handling",
            "2-Tap Quick Reordering"
        ],
        sourceUrl: "https://github.com/iamjothees",
        liveUrl: null, // Hidden since no standalone live demo URL is deployed yet
        previewBadge: "GitHub Repo Available"
    },
    {
        id: "qwik-preview",
        title: "Qwik Preview",
        category: "PRODUCTIVITY TOOL",
        icon: Smartphone,
        accentColor: "from-cyan-400 to-blue-500",
        badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
        tagline: "1-Click tool to preview localhost on a docked phone with zero typing.",
        stack: ["Chrome Extension", "Node.js Relay", "PWA Receiver", "Docker"],
        highlights: [
            "< 50ms Push Latency",
            "24/7 Screen Stay-Awake",
            "Zero Manual IP Typing",
            "100% Local LAN Speed"
        ],
        sourceUrl: "https://github.com/iamjothees/qwik-mobile-preview",
        liveUrl: "https://qwik-preview.joecodes.in/", // Real live demo!
        previewBadge: "Live Web Tool Available",
        story: {
            badge: "The 2-Hour Fix",
            readTime: "1 min read",
            headline: "I Was Tired of Touching My Phone 50 Times a Day. So I Killed the Routine.",
            sections: [
                {
                    heading: "The Dumb Daily Routine",
                    body: "Every single night, I found myself doing the exact same tedious dance: pick up phone, unlock, squint at my laptop to find my computer's IP address, type twelve numbers on a tiny glass keyboard, and hit go. Then, 40 seconds later while I was typing on my laptop, the phone screen would dim and lock itself. Over and over, 30 to 50 times a night.",
                    callout: "Even QR code tools were annoying—you still had to stop typing, pick up the phone, line up the camera lens, and tap a popup."
                },
                {
                    heading: "The 2-Hour Decision",
                    body: "On a random weekday, while working on a project, I finally snapped. I decided to build a real, zero-touch fix right then and there within 2 hours. The dream was simple: my phone sits on a stand next to my keyboard, stays awake forever, and updates the second I press a button on my laptop. Zero touches."
                },
                {
                    heading: "The Magic Moment",
                    body: "Under two hours later, it actually worked. I hit one shortcut on my keyboard (Option+Shift+Q), and in less than the blink of an eye—50 milliseconds—my phone on the desk pops open with the exact page. Screen stays permanently on. No typing, no scanning, no reaching over.",
                    callout: "Built in under 2 hours out of pure laziness. Released 100% free and open-source so nobody ever has to type IP addresses with their thumbs again."
                }
            ]
        }
    }
];

export default function Projects() {
    const [activeStoryProject, setActiveStoryProject] = useState(null);

    return (
        <section
            id="projects"
            className="py-24 px-4 relative min-h-screen overflow-hidden border-t border-gray-900 bg-[#0a0a0a]"
        >
            {/* Background subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #0a0a0a 1px)",
                    backgroundSize: "40px 40px",
                    backgroundPosition: "0 0, 20px 20px"
                }}
            />

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-pink/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-xs font-medium mb-4"
                    >
                        <Sparkles size={13} className="text-neon-green" />
                        <span>REAL THINGS I'VE BUILT</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto"
                    >
                        Built for speed, ease of use, and everyday humans. Looking for more designs? Explore all 9 interactive templates and demos on{" "}
                        <a
                            href="https://showcase.joecodes.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neon-blue font-bold underline hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                            <span>showcase.joecodes.in</span>
                            <ArrowUpRight size={14} className="inline" />
                        </a>.
                    </motion.p>

                    {/* High-Visibility Showcase Bridge Action Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-6"
                    >
                        <a
                            href="https://showcase.joecodes.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neon-blue/40 bg-neon-blue/10 text-neon-blue hover:bg-neon-blue hover:text-black text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,255,255,0.18)] active:scale-95 group cursor-pointer"
                        >
                            <Zap size={14} className="text-neon-blue group-hover:text-black fill-current" />
                            <span>Browse 9 Live Templates on showcase.joecodes.in</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Projects Grid: Clean, Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectsData.map((project) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="group relative rounded-2xl bg-gray-900/40 border border-white/10 hover:border-white/25 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden shadow-xl"
                            >
                                {/* Top Glow Accent Line */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`} />

                                <div>
                                    {/* Card Header & Badges */}
                                    <div className="flex items-start justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:border-white/30 transition-colors">
                                                <Icon size={24} className="text-neon-blue" />
                                            </div>
                                            <div>
                                                <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${project.badgeColor}`}>
                                                    {project.category}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 1-Line Punchy Pitch */}
                                    <p className="text-gray-300 text-sm leading-snug mb-5 font-normal">
                                        {project.tagline}
                                    </p>

                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.stack.map((name) => (
                                            <span
                                                key={name}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-black/60 border border-white/10 text-gray-200"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                                <span className="font-medium text-white">{name}</span>
                                            </span>
                                        ))}
                                    </div>

                                    {/* Key Capabilities: Glanceable Checklist */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                                        {project.highlights.map((label) => (
                                            <div
                                                key={label}
                                                className="px-2.5 py-2 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300 flex items-center gap-2"
                                            >
                                                <CheckCircle2 size={13} className="text-neon-blue shrink-0" />
                                                <span className="font-medium">{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        {/* Try Live Demo button (Only rendered if a real live demo URL exists) */}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-neon-blue to-neon-pink text-black hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.25)] active:scale-95 cursor-pointer no-underline"
                                            >
                                                <Play size={13} className="fill-black" />
                                                <span>Try Live Demo</span>
                                                <ArrowUpRight size={13} className="text-black" />
                                            </a>
                                        )}

                                        {/* Story / Behind the Build button (Only rendered if project has a story!) */}
                                        {project.story && (
                                            <button
                                                type="button"
                                                onClick={() => setActiveStoryProject(project)}
                                                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-neon-green hover:text-white bg-neon-green/10 border border-neon-green/30 hover:bg-neon-green/20 hover:border-neon-green/60 transition-all active:scale-95 cursor-pointer group/story"
                                            >
                                                <BookOpen size={13} className="text-neon-green group-hover/story:scale-110 transition-transform" />
                                                <span>{project.story.badge || "Behind the Build"}</span>
                                            </button>
                                        )}

                                        {/* View Code button */}
                                        {project.sourceUrl && (
                                            <a
                                                href={project.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/30 transition-all active:scale-95"
                                            >
                                                <Github size={14} />
                                                <span>View Code</span>
                                            </a>
                                        )}
                                    </div>

                                    {/* Sub-text Badge */}
                                    {project.previewBadge && (
                                        <div className="flex items-center gap-1.5 text-[11px] text-neon-green shrink-0">
                                            <ShieldCheck size={14} className="shrink-0" />
                                            <span>{project.previewBadge}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Slide-over Drawer for Project Experiences & Stories */}
            <ProjectStoryDrawer
                project={activeStoryProject}
                isOpen={!!activeStoryProject}
                onClose={() => setActiveStoryProject(null)}
            />
        </section>
    );
}
