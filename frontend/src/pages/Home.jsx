import { motion } from "motion/react";
import { GiArtificialHive } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import {
    FiMic,
    FiFileText,
    FiBarChart2,
    FiMap,
    FiTarget,
    FiCheckCircle,
    FiArrowUpRight,
} from "react-icons/fi";

import dashboard from "../assets/image.png";
import LoginModel from "../components/LoginModel";

const highlights = [
    {
        icon: <FiFileText />,
        number: "01",
        title: "Make your experience count",
        description:
            "Turn your experience into a clearer, more compelling professional story with resume insights and guided editing.",
        tag: "RESUME",
    },
    {
        icon: <FiMic />,
        number: "02",
        title: "Practise with purpose",
        description:
            "Build confidence for the conversations ahead with structured interview practice and room to improve.",
        tag: "INTERVIEW PRACTICE",
    },
    {
        icon: <FiBarChart2 />,
        number: "03",
        title: "Know what to improve",
        description:
            "Use focused feedback to spot strengths, uncover gaps, and decide where your effort matters most.",
        tag: "FEEDBACK",
    },
    {
        icon: <FiMap />,
        number: "04",
        title: "Give your goals a route",
        description:
            "Work toward your target role with a more deliberate plan for learning and professional growth.",
        tag: "LEARNING PATH",
    },
];

function Home({ setUser }) {
    const [showLogin, setShowLogin] = useState(false);

    const openLogin = () => setShowLogin(true);

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#f8f8f7] font-sans text-[#101010] selection:bg-black selection:text-white">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="fixed inset-x-0 top-0 z-50 flex h-[68px] items-center justify-between border-b border-black/[0.06] bg-[#f8f8f7]/85 px-5 backdrop-blur-xl md:px-10"
            >
                <a href="#" className="flex items-center gap-2.5" aria-label="CandiCore home">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#101010] text-white shadow-[0_5px_18px_rgba(0,0,0,0.14)]">
                        <GiArtificialHive size={19} />
                    </span>
                    <span className="text-lg font-extrabold tracking-[-0.06em] md:text-xl">
                        CandiCore
                    </span>
                </a>

                <motion.button
                    type="button"
                    onClick={openLogin}
                    whileHover={{ y: -1, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#171717] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition hover:bg-black md:px-5"
                >
                    Log in <FaArrowRight size={12} />
                </motion.button>
            </motion.nav>

            <main>
                {/* Hero */}
                <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 md:pb-24 md:pt-40">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[440px] w-[min(90vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.075),transparent_68%)] blur-2xl"
                    />
                    <div className="mx-auto max-w-5xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-semibold tracking-wide text-black/65 shadow-sm md:text-sm"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-black" />
                            YOUR NEXT CHAPTER STARTS HERE
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.06 }}
                            className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-[-0.055em] sm:text-4xl md:text-5xl"
                        >
                            Be ready for
                            <span className="mt-2 block text-black/30">what comes next.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-black/45 md:text-base md:leading-7"
                        >
                            Build a stronger resume, sharpen your interview skills, and turn
                            uncertainty into a plan you can act on.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.22 }}
                            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                        >
                            <motion.button
                                type="button"
                                onClick={openLogin}
                                whileHover={{
                                    y: -2,
                                    boxShadow: "0 14px 34px rgba(0,0,0,0.2)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#171717] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition hover:bg-black"
                            >
                                Start your journey <FaArrowRight size={13} />
                            </motion.button>
                            <motion.a
                                href="#how-it-helps"
                                whileHover={{ y: -2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-black/70 transition hover:border-black/25 hover:bg-white"
                            >
                                Explore CandiCore <FiArrowUpRight size={16} />
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 34, scale: 0.975 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -5 }}
                            className="relative mx-auto mt-10 max-w-5xl md:mt-12"
                        >
                            <motion.div
                                aria-hidden="true"
                                animate={{ scale: [1, 1.035, 1], opacity: [0.45, 0.8, 0.45] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-3 -z-10 rounded-[28px] bg-black/[0.045] blur-xl md:-inset-5"
                            />
                            <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.10)] md:rounded-[22px] md:p-2">
                                <motion.img
                                    src={dashboard}
                                    alt="Preview of the CandiCore career preparation dashboard"
                                    whileHover={{ scale: 1.015 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    className="block h-auto w-full rounded-xl object-cover md:rounded-2xl"
                                />
                            </div>
                            <div className="mx-auto mt-4 flex max-w-fit items-center gap-2 rounded-full border border-black/[0.07] bg-white/80 px-3.5 py-2 text-xs text-black/50 shadow-sm">
                                <FiCheckCircle size={14} />
                                One workspace for your next career move
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Value proposition */}
                <section id="how-it-helps" className="px-5 py-16 md:py-24">
                    <div className="mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                            className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_0.75fr] md:items-end"
                        >
                            <div>
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                                    A clearer way forward
                                </p>
                                <h2 className="max-w-2xl text-2xl font-extrabold leading-tight tracking-[-0.05em] sm:text-3xl md:text-4xl">
                                    Preparation that moves you forward.
                                </h2>
                            </div>
                            <p className="max-w-lg text-sm leading-7 text-black/55 md:justify-self-end md:text-base">
                                Career preparation works best when you know what you bring,
                                what needs work, and what to focus on next. CandiCore brings
                                those pieces into one considered experience.
                            </p>
                        </motion.div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {highlights.map((item, index) => (
                                <motion.article
                                    key={item.number}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.4, delay: index * 0.07 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
                                >
                                    <div className="mb-8 flex items-start justify-between">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#171717] text-lg text-white">
                                            {item.icon}
                                        </span>
                                        <span className="text-xs font-semibold tracking-widest text-black/25">
                                            {item.number}
                                        </span>
                                    </div>
                                    <p className="mb-2 text-[10px] font-bold tracking-[0.16em] text-black/40">
                                        {item.tag}
                                    </p>
                                    <h3 className="mb-3 text-lg font-bold tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-6 text-black/55">
                                        {item.description}
                                    </p>
                                    <div className="pointer-events-none absolute -bottom-12 -right-10 h-28 w-28 rounded-full bg-black/[0.035] blur-2xl transition-all group-hover:bg-black/[0.08]" />
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing call to action */}
                <section className="px-5 pb-20 pt-4 md:pb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#171717] px-6 py-12 text-center text-white sm:px-12 md:py-16"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-white/[0.08] blur-[80px]"
                        />
                        <div className="relative mx-auto max-w-2xl">
                            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08]">
                                <FiTarget size={22} />
                            </div>
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                                Your next move
                            </p>
                            <h2 className="text-2xl font-extrabold leading-tight tracking-[-0.05em] sm:text-3xl md:text-4xl">
                                Less guesswork.
                                <span className="block text-white/45">More forward momentum.</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60 md:text-base">
                                Start with where you are today. Build on your strengths, work
                                on the gaps, and prepare for the opportunities ahead.
                            </p>
                            <motion.button
                                type="button"
                                onClick={openLogin}
                                whileHover={{ y: -2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
                            >
                                Get started <FaArrowRight size={13} />
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </main>

            <footer className="border-t border-black/[0.07] bg-[#f8f8f7] px-5 py-7">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                    <a href="#" className="flex items-center gap-2" aria-label="CandiCore home">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#101010] text-white">
                            <GiArtificialHive size={14} />
                        </span>
                        <span className="text-sm font-extrabold tracking-[-0.05em]">
                            CandiCore
                        </span>
                    </a>
                    <p className="text-center text-xs text-black/45">
                        Find your direction. Build your next chapter.
                    </p>
                    <p className="text-xs text-black/40">
                        © {new Date().getFullYear()} CandiCore
                    </p>
                </div>
            </footer>

            {showLogin && (
                <LoginModel
                    onClose={() => setShowLogin(false)}
                    setUser={setUser}
                />
            )}
        </div>
    );
}

export default Home;
