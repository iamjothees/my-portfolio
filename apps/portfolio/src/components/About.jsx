import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Armchair, Glasses, Coffee, Code, Calendar, Terminal, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section className="min-h-screen py-20 px-4 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center">

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-neon-green/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto z-10 w-full space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        The <span className="text-neon-pink">Indoor Enthusiast</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base">
                        Web Builder • Left-Handed • Certified Homebody
                    </p>
                </motion.div>

                {/* The Origin Story */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-gray-900/30 border border-gray-800 rounded-3xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Sparkles size={100} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="p-4 bg-neon-green/10 rounded-full text-neon-green shrink-0">
                            <Sparkles size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1.5">Accidental Dev Since Grade 11</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-3xl">
                                Started out obsessed with backend code—until I realized logic is useless if everyday humans can't easily click and use it. Now I build fast, friendly web tools with zero fluff.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Col: ID Card (Current Status) */}
                    <motion.div
                        className="h-full"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm h-full flex flex-col hover:border-neon-blue/30 transition-colors">
                            <div className="flex items-start gap-4 mb-8">
                                <div className="p-3 bg-neon-blue/10 rounded-2xl text-neon-blue shrink-0">
                                    <Glasses size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Jotheeswaran (Joe)</h3>
                                    <p className="text-sm text-neon-green font-medium">
                                        Age 25 • Building for the Web for 5+ Years
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 flex-grow">
                                <div className="flex gap-3.5 items-center">
                                    <Armchair className="text-gray-500 shrink-0" size={18} />
                                    <div className="text-sm">
                                        <span className="text-gray-400">Current Role: </span>
                                        <span className="text-white font-semibold">Full-Stack Dev @ AWP Solutions</span>
                                    </div>
                                </div>

                                <div className="flex gap-3.5 items-center">
                                    <Calendar className="text-gray-500 shrink-0" size={18} />
                                    <div className="text-sm">
                                        <span className="text-gray-400">Routine: </span>
                                        <span className="text-white font-semibold">6 Days / Week</span>
                                        <span className="text-gray-400 text-xs ml-1.5">(with a sacred 30-min power nap)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Col: The Simulator */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative h-full"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-blue rounded-3xl blur opacity-20"></div>
                        <div className="relative bg-[#0F0F0F] rounded-3xl p-8 border border-gray-800 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Coffee className="text-yellow-500" />
                                    The "Chill" Simulator
                                </h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    I can stay indoors for days. Can you survive 30 seconds of digital hibernation?
                                </p>
                            </div>

                            <BalconySimulator />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Week in the Life (The Story) */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Code size={120} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="text-neon-pink">A Week in the Life</span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6 relative z-10">
                        {/* 1. The Process */}
                        <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                            <div className="text-neon-green font-mono text-xs uppercase tracking-wider font-bold">Mon – Sat • Cruising</div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                I don't panic. If a bug shows up, I stare at it calmly until it gets uncomfortable and leaves.
                            </p>
                        </div>

                        {/* 2. The Ritual */}
                        <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                            <div className="text-yellow-400 font-mono text-xs uppercase tracking-wider font-bold">Sunday • 30 km/h Ritual</div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                One day off. Appa, Amma, me, and our Burgman cruising at a blistering 30-ish km/h (window shopping included). Pure breeze, zero bugs.
                            </p>
                        </div>

                        {/* 3. The Setup */}
                        <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                            <div className="text-neon-pink font-mono text-xs uppercase tracking-wider font-bold">Every Night • The Reality</div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Dream: Dual 4K monitors & standing desk. <br />
                                <span className="text-yellow-400 font-medium">Reality:</span> Laying in bed with a warm laptop.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

function BalconySimulator() {
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isTouch] = useState(() => typeof window !== "undefined" && (('ontouchstart' in window) || navigator.maxTouchPoints > 0));

    const MESSAGES = [
        { p: 1, text: "Initializing hibernation protocols..." },
        { p: 10, text: "Ordering digital snacks..." },
        { p: 20, text: "Routing power to AC..." },
        { p: 30, text: "Optimizing comfort levels..." },
        { p: 45, text: "Buffering Netflix queue..." },
        { p: 60, text: "Ignoring outdoor notifications..." },
        { p: 80, text: "Syncing circadian rhythm to 'Night Owl'..." },
        { p: 95, text: "Outdoor activities: POSTPONED." },
        { p: 100, text: "ACHIEVEMENT UNLOCKED: Indoor Zen Master" }
    ];

    useEffect(() => {
        let interval;
        if (isActive && progress < 100) {
            interval = setInterval(() => {
                setProgress(prev => prev + 1);
            }, 300); // 300ms * 100 = 30 seconds
        } else if (!isActive && progress > 0 && progress < 100) {
            // Slowly drain if they stop just to annoy them
            interval = setInterval(() => {
                setProgress(prev => Math.max(0, prev - 5));
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isActive, progress]);

    // Derive status directly based on progress and active state
    const currentMsg = MESSAGES.slice().reverse().find(m => progress >= m.p);
    let status = "Ready to chill?";
    if (!isActive && progress > 0 && progress < 100) {
        status = "Hey! You moved! Vibe lost.";
    } else if (isActive && currentMsg) {
        status = currentMsg.text;
    }

    return (
        <div className="w-full h-full flex flex-col justify-end">
            <div className="mb-4 h-8 flex items-center justify-between text-xs font-mono text-neon-green">
                <span className="truncate mr-2">{status}</span>
                <span>{progress}%</span>
            </div>

            <div className="h-4 bg-gray-800 rounded-full overflow-hidden mb-6 border border-gray-700">
                <motion.div
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-pink"
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "tween", ease: "linear", duration: 0.1 }}
                />
            </div>

            <button
                className={`w-full py-4 rounded-xl font-bold transition-all select-none touch-none ${progress === 100
                    ? "bg-neon-green text-black cursor-default"
                    : isActive
                        ? "bg-gray-800 text-gray-400 border border-gray-600"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                onMouseEnter={() => !isTouch && progress < 100 && setIsActive(true)}
                onMouseLeave={() => !isTouch && progress < 100 && setIsActive(false)}
                onTouchStart={() => {
                    if (progress < 100) {
                        setIsActive(true);
                    }
                }}
                onTouchEnd={() => {
                    if (progress < 100) {
                        setIsActive(false);
                    }
                }}
                onContextMenu={(e) => e.preventDefault()} // Prevent right click on hold
            >
                {progress === 100
                    ? "Maximum Comfort Achieved."
                    : isActive
                        ? (isTouch ? "Holding Simulation..." : "Charging Social Battery...")
                        : (isTouch ? "Hold to Hibernate" : "Hover to Hibernate")}
            </button>
            <p className="text-center text-xs text-gray-600 mt-2">
                {isTouch ? "(Don't lift your finger or you lose the vibe)" : "(Don't move your mouse away or you lose the vibe)"}
            </p>
        </div>
    );
}
