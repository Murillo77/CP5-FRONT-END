import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul className="menu">
                <li className="hover:text-black"> <Link href="/">Home</Link> </li>
                <li className="hover:text-black"> <Link href="/orbitas">Orbitas Planetarias</Link> </li>
                <li className="hover:text-black"> <Link href="/cronologia">Cronologia de Eventos</Link> </li>
                <li className="hover:text-black"> <Link href="/forcas">Forças Gravitacionais</Link> </li>
                <li className="hover:text-black"> <Link href="/velocidade">Velocidade e Trajetória</Link> </li>
            </ul>
        </nav>
    )
}