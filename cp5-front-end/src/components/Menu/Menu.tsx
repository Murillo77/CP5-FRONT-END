import Link from "next/link";
import { paginas } from "../../data/conteudo";
import { Pagina } from "../../types/Pagina";

export default function Menu() {
    return (
        <nav>
            <ul className="menu">
                <Link href="/">Home</Link>
                {paginas.map((item: Pagina) => (
                    <li key={item.id} className="hover:text-black">
                        <Link href={`/conteudo/${item.id}`}>{item.nome}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}