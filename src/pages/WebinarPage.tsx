import { motion } from "framer-motion";
import WebinarNavbar from "@/components/landing/WebinarNavbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Check, Users, Quote, ArrowRight, Zap, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WebinarPage = () => {
    const scrollToRegister = () => {
        document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-background">
            <WebinarNavbar onRegisterClick={scrollToRegister} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white min-h-[90vh] flex items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* Animated Gradient Globs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-default"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Live Interactive Workshop</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
                            VibeCoding
                        </span>
                        <br />
                        <span className="text-4xl md:text-6xl lg:text-7xl text-white/90">
                            for HR and L&D
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-purple-100/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Build powerful AI tools in <span className="text-white font-semibold">60 minutes</span>.
                        No code required. Just vibe.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur border border-white/5">
                            <Calendar className="w-5 h-5 text-purple-300" />
                            <span className="font-medium text-white">Jan 15</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur border border-white/5">
                            <Clock className="w-5 h-5 text-purple-300" />
                            <span className="font-medium text-white">7:00 PM (UTC+3)</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-[0_0_50px_-12px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-12px_rgba(255,255,255,0.7)] transition-all duration-300 group"
                            onClick={scrollToRegister}
                        >
                            Reserve Your Spot
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <p className="mt-4 text-white/50 text-sm">Limited live spots available</p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section - Redesigned */}
            <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2">
                            Start Building with AI. <br /> No Coding Required.
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Join a hands-on workshop to master <span className="text-purple-400 font-semibold">vibe-coding</span>—the art of building software by describing it.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
                                title: "The Vibe-Coding Way",
                                desc: "Describe what you want using natural language. Iterate and improve step-by-step. It's like delegating to a senior engineer.",
                                gradient: "from-yellow-500/20 to-orange-500/5"
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-blue-400" />,
                                title: "60 Minutes to MVP",
                                desc: "Move fast. In just one hour, you will go from a blank screen to a fully functional tool that solves real HR problems.",
                                gradient: "from-blue-500/20 to-cyan-500/5"
                            },
                            {
                                icon: <Target className="w-8 h-8 text-purple-400" />,
                                title: "Real-World Impact",
                                desc: "Don't just learn theory. Build a screening tool that extracts strengths, risks, and generates interview questions.",
                                gradient: "from-purple-500/20 to-pink-500/5"
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Card className="bg-slate-900/50 border-white/10 h-full backdrop-blur-sm hover:bg-slate-800/50 transition-colors group">
                                    <CardContent className="p-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What you will build */}
            <section id="build" className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                                <Zap className="w-4 h-4" /> Practical Output
                            </div>
                            <h2 className="text-3xl font-bold">What You Will Build</h2>
                            <p className="text-lg text-muted-foreground">
                                By the end, you will have a working prototype of a "Screening Copilot" that helps you:
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Structure candidate screening",
                                    "Extract key strengths and potential risks",
                                    "Generate interview questions based on role requirements",
                                    "Produce a clear summary for hiring managers"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary/10 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-sm text-muted-foreground">
                                <p>
                                    You will also understand how vibe-coding works, so you can keep building simple automations for your own HR workflows after the workshop.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur-xl"></div>
                            <div className="relative bg-card border rounded-xl overflow-hidden shadow-2xl">
                                {/* Abstract UI representation of the tool being built */}
                                <div className="bg-muted p-4 border-b flex gap-2 items-center">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    <div className="ml-4 h-6 w-64 bg-background/50 rounded flex items-center px-4 text-xs text-muted-foreground">lovable.dev/screening-copilot</div>
                                </div>
                                <div className="p-8 space-y-6">
                                    <div className="space-y-2">
                                        <div className="h-4 w-1/3 bg-primary/20 rounded"></div>
                                        <div className="h-20 w-full bg-muted rounded border border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground text-sm">
                                            Upload Resume (PDF)
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="flex-1 space-y-2">
                                                <div className="h-3 w-2/3 bg-muted rounded"></div>
                                                <div className="h-3 w-full bg-muted rounded"></div>
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <div className="h-3 w-2/3 bg-green-500/20 rounded"></div>
                                                <div className="h-3 w-full bg-green-500/10 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="h-24 w-full bg-blue-500/5 rounded border border-blue-100 dark:border-blue-900/50 p-4">
                                            <div className="flex gap-2 mb-2">
                                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs">🤖</div>
                                                <div className="h-4 w-32 bg-blue-200/50 rounded"></div>
                                            </div>
                                            <div className="space-y-1 ml-8">
                                                <div className="h-2 w-full bg-blue-100/50 rounded"></div>
                                                <div className="h-2 w-5/6 bg-blue-100/50 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-20 bg-muted/50">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">Who This Is For</h2>
                        <p className="text-muted-foreground">Designed for HR professionals who want to leverage AI practically.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            "Recruiters and Talent Acquisition specialists",
                            "HRBPs and People Ops",
                            "L&D and T&D professionals",
                            "Team leads involved in hiring",
                            "Anyone curious about practical AI tools for HR"
                        ].map((role, i) => (
                            <Card key={i} className="bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-medium text-lg">{role}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Takeaways */}
            <section id="benefits" className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="bg-gradient-to-br from-primary/90 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-10 text-center">What You Will Walk Away With</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    "A working “Screening Copilot” prototype in Lovable",
                                    "A clear understanding of the vibe-coding approach (prompt, test, improve)",
                                    "A practical framework for turning HR workflows into simple AI automations",
                                    "Inspiration for other HR tools you can build in 1–2 hours"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-white/20 p-1.5 h-fit rounded-full flex-shrink-0">
                                            <Check className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-lg font-medium leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Format & Why it matters */}
            <section id="format" className="py-20 bg-background">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-primary" /> Workshop Format (60 min)
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    { title: "Quick demo", desc: "What you will build and why it works" },
                                    { title: "Vibe-coding basics", desc: "Prompt, test, improve" },
                                    { title: "Guided build", desc: "Create the tool step by step" },
                                    { title: "Personalization", desc: "Adapt it to your role, vacancy, or workflow" },
                                    { title: "Live Q&A", desc: "Implementation ideas and best practices" }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="font-mono text-primary/50 text-xl font-bold">{i + 1}</span>
                                        <div>
                                            <h4 className="font-bold">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-2xl border">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Target className="w-6 h-6 text-primary" /> Why This Matters
                            </h3>
                            <p className="text-lg mb-6">
                                AI in HR does not have to be a long and complex transformation project. This workshop is about practical skills you can apply immediately to:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Save hours of manual screening",
                                    "Improve consistency and structure in evaluation",
                                    "Support hiring managers with clearer decision-making",
                                    "Free up time for real human work"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t font-medium text-lg text-primary">
                                You will leave with a tool and the confidence to build more.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why AmeenCheck */}
            <section className="py-20 bg-muted/50">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Why AmeenCheck is Hosting</h2>
                        <p className="text-xl text-muted-foreground">
                            At AmeenCheck, we build AI that supports the full hiring workflow, from job descriptions to structured screening and better decision-making.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 my-10">
                        <div className="bg-background p-6 rounded-xl border shadow-sm">
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <h4 className="font-semibold mb-3">We keep seeing the same hiring bottlenecks across teams</h4>
                            <p className="text-muted-foreground text-sm">Traditional screening is manual, biased, and slow. We want to show a better way.</p>
                        </div>
                        <div className="bg-background p-6 rounded-xl border shadow-sm">
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <h4 className="font-semibold mb-3">We know what good screening looks like</h4>
                            <p className="text-muted-foreground text-sm">Structured, fair, and explainable evaluation is at the core of what we do.</p>
                        </div>
                        <div className="bg-background p-6 rounded-xl border shadow-sm md:col-span-2">
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <h4 className="font-semibold mb-3">We want HR professionals to feel empowered to build tools themselves</h4>
                            <p className="text-muted-foreground text-sm">Even without engineering resources, you can build powerful automations.</p>
                        </div>
                    </div>

                    <div className="text-center border p-6 rounded-xl bg-primary/5">
                        <p className="text-lg font-medium">
                            This workshop is a practical introduction to what we do every day:
                            <br />
                            <span className="text-primary font-bold">turn messy hiring workflows into clear, repeatable, AI-assisted processes.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Registration Section (Replaces CTA) */}
            <section id="register" className="py-20 flex justify-center">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Secure Your Spot</h2>
                        <p className="text-muted-foreground">
                            Fill out the form below to register for the live workshop.
                        </p>
                    </div>
                    <div className="w-full bg-background rounded-xl overflow-hidden shadow-sm border h-[700px]">
                        <iframe
                            className="airtable-embed w-full h-full"
                            src="https://airtable.com/embed/appB21KZVWRhmG7bQ/pagEepFIjJocDswh0/form"
                            frameBorder="0"
                            style={{ background: "transparent" }}
                        />
                    </div>
                </div>
            </section>

            <Footer showCTA={false} />
        </main>
    );
};

export default WebinarPage;
