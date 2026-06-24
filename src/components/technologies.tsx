export default function Technologies() {
    const techs = [
        "Postman",
        "Python",
        "Git",
        "GitHub",
        "GitHub Actions",
        "REST API",
        "JSON",
        "XML",
        "SQL",
        "Next.js",
        "React",
        "TypeScript",
        "CI/CD",
    ];

    return (
        <section
            id="technologie"
            className="bg-zinc-950 text-white py-24 px-6"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Technologie
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {techs.map((tech) => (
                        <div
                            key={tech}
                            className="px-5 py-3 rounded-lg border border-zinc-700"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}