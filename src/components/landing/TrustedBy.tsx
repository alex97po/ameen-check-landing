import atelier from "@/assets/partners/atelier.svg";
import daoEducation from "@/assets/partners/dao-education-technology.svg";
import daoFinancial from "@/assets/partners/dao-financial-solutions.svg";
import lingvoExpert from "@/assets/partners/lingvo-expert.svg";
import postPulse from "@/assets/partners/post-pulse.svg";
import unifyHub from "@/assets/partners/unify-hub.svg";

const companies = [
    { name: "DAO Education Technology", logo: daoEducation },
    { name: "Post Pulse", logo: postPulse },
    { name: "Atelier", logo: atelier },
    { name: "Lingvo Expert", logo: lingvoExpert },
    { name: "DAO Financial Solutions", logo: daoFinancial },
    { name: "UnifyHub", logo: unifyHub }
];

const TrustedBy = () => {
    return (
        <section className="py-20 bg-background border-b border-white/5 relative z-10">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Trusted by Innovative Companies
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Powering the next generation of recruitment agencies and talent acquisition teams.
                </p>
            </div>

            <div className="relative flex overflow-hidden group py-8">
                <div className="flex animate-scroll whitespace-nowrap gap-20 min-w-full justify-center items-center px-10">
                    {/* First set of logos */}
                    {companies.map((company, i) => (
                        <div key={i} className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-all duration-300">
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-16 md:h-20 w-auto object-contain max-w-[200px] brightness-0 invert"
                            />
                        </div>
                    ))}

                    {/* Duplicates for infinite scroll */}
                    {companies.map((company, i) => (
                        <div key={`dup-${i}`} className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-all duration-300">
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-16 md:h-20 w-auto object-contain max-w-[200px] brightness-0 invert"
                            />
                        </div>
                    ))}
                    {companies.map((company, i) => (
                        <div key={`dup2-${i}`} className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-all duration-300">
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-16 md:h-20 w-auto object-contain max-w-[200px] brightness-0 invert"
                            />
                        </div>
                    ))}
                    {companies.map((company, i) => (
                        <div key={`dup3-${i}`} className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-all duration-300">
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-16 md:h-20 w-auto object-contain max-w-[200px] brightness-0 invert"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </section>
    );
};

export default TrustedBy;
