export const Footer = () => {
    const footerLinks = [
        {
            title: "ABOUT US",
            links: ["Works", "Strategy", "Releases", "Press", "Mission"],
        },
        {
            title: "CUSTOMERS",
            links: ["Trending", "Popular", "Customers", "Features"],
        },
        {
            title: "SUPPORT",
            links: ["Developers", "Support", "Customer Service", "Guide"],
        },
    ];

    return (
        <footer className="bg-slate-800 text-neutral-50 w-full">
            <div className="lg:w-[1640px] mx-auto px-5 py-16 flex flex-col lg:flex-row gap-12 items-start">

                <div className="basis-1/2 lg:pr-8">
                    <h2 className="text-3xl font-bold mb-4">Awwwsome.</h2>
                    <p className="text-neutral-300 text-sm leading-relaxed max-w-[398px]">
                        Our team crafts exceptional web experiences, built on research-driven strategy and world-class execution.
                    </p>
                </div>

                <div className="basis-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {footerLinks.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-sm font-semibold mb-4 tracking-wider">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-neutral-300 text-sm hover:text-neutral-50 transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>

            <div className="bg-slate-900 py-6">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-neutral-400 text-sm">
                        2022 © Awwwsome Designers
                    </p>
                </div>
            </div>
        </footer>
    );
};
