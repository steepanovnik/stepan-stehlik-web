export default function Footer() {
    return (
        <p className="text-center text-zinc-500 mt-16 text-sm">
            © {new Date().getFullYear()} Štěpán Stehlík. Vytvořeno v Next.js a Tailwind CSS.
        </p>
    )
}