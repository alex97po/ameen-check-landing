import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingTiers = [
    {
        name: "Starter",
        price: "$99",
        description: "Perfect for growing teams",
        features: [
            "Up to 300 applicants included",
            "$0.35 per additional candidate",
            "Basic CV Parsing",
            "Email Support",
        ],
        highlight: false,
        cta: "Get Started",
    },
    {
        name: "Pro",
        price: "$300",
        description: "For scaling companies",
        features: [
            "Up to 1000 applicants included",
            "$0.30 per additional candidate",
            "Advanced CV Parsing & Ranging",
            "WhatsApp Prescreening",
            "Branded CV Enhancement",
            "Priority Support",
        ],
        highlight: true,
        cta: "Start Free Trial",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for large orgs",
        features: [
            "Unlimited applicants",
            "Custom integration",
            "Dedicated account manager",
            "SLA & Advanced Security",
        ],
        highlight: false,
        cta: "Contact Sales",
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Choose the plan that fits your recruitment needs. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier) => (
                        <Card
                            key={tier.name}
                            className={`relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${tier.highlight ? "border-primary shadow-md shadow-primary/20 scale-105" : ""
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-xl font-medium text-muted-foreground">{tier.name}</CardTitle>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                                    {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                                </div>
                                <CardDescription className="mt-2 text-base">{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                                            <Check className="w-5 h-5 text-primary shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className={`w-full ${tier.highlight
                                            ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                                            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                                        }`}
                                    size="lg"
                                >
                                    {tier.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
