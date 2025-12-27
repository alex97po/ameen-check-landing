import { motion } from "framer-motion";
import { FileText, MessageSquare, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        icon: FileText,
        title: "AI CV Parsing & Ranking",
        description: "Instantly extract data from thousands of CVs. Our engine standardizes formats and ranks candidates based on your specific job requirements with 99% accuracy.",
        color: "text-blue-500",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: MessageSquare,
        title: "WhatsApp Audio Prescreening",
        description: "Automate the first round. Our bot conducts audio interviews via WhatsApp, recording and transcribing responses so you only listen to the best.",
        color: "text-green-500",
        gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
        icon: Sparkles,
        title: "Smart CV Enhancement",
        description: "Automatically reformat and enhance candidate CVs into your agency's branded template. Fix grammar, highlight key skills, and present a polished profile to clients.",
        color: "text-purple-500",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Built for High-Volume Hiring
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Three powerful tools integrated into one seamless workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="bg-card/50 border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 group h-full">
                                <CardContent className="p-8">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                                {/* Decorative glow effect */}
                                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${feature.gradient} blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
