import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WebinarNavbarProps {
    onRegisterClick: () => void;
}

const WebinarNavbar = ({ onRegisterClick }: WebinarNavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = [
        { id: "#about", label: "About" },
        { id: "#build", label: "What You'll Build" },
        { id: "#benefits", label: "Benefits" },
        { id: "#format", label: "Format" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-background/80 backdrop-blur-md border-border/50 py-3"
                : "bg-transparent border-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 group cursor-pointer">
                        <img
                            src="/ameen-logo.svg"
                            alt="AmeenCheck"
                            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">AmeenCheck</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:glow-sm transition-all duration-200"
                            >
                                {link.label}
                            </button>
                        ))}
                        <Button
                            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                            size="sm"
                            onClick={onRegisterClick}
                        >
                            Reserve Spot
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border absolute top-full left-0 right-0 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        scrollToSection(link.id);
                                        setIsOpen(false);
                                    }}
                                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 text-left"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Button className="w-full mt-4 bg-primary text-white" onClick={() => {
                                setIsOpen(false);
                                onRegisterClick();
                            }}>
                                Reserve Spot
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default WebinarNavbar;
