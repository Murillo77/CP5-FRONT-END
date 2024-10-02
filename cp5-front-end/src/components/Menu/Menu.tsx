import Link from "next/link";
import conteudo from "../../data/conteudo";
import { MenuItem } from "@/types/MenuItem";

/*
export const paginas = [
    {
        "id": 1,
        "nome": "Home",
        "url": "/"
    },
    {
        "id": 2,
        "nome": "Órbitas Planetárias",
        "url": "/orbitas"
    },
    {
        "id": 3,
        "nome": "Cronologia de Eventos",
        "url": "/cronologia"
    },
    {
        "id": 4,
        "nome": "Forças Gravitacionais",
        "url": "/forcas"
    },
    {
        "id": 5,
        "nome": "Velocidade e Trajetória",
        "url": "/velocidade"
    }
]
*/

export default function Menu() {
    return (
        // <nav>
        //     <ul className="menu">
        //         <li className="hover:text-black"> <Link href="/">Home</Link> </li>
        //         <li className="hover:text-black"> <Link href="/orbitas">Orbitas Planetarias</Link> </li>
        //         <li className="hover:text-black"> <Link href="/cronologia">Cronologia de Eventos</Link> </li>
        //         <li className="hover:text-black"> <Link href="/forcas">Forças Gravitacionais</Link> </li>
        //         <li className="hover:text-black"> <Link href="/velocidade">Velocidade e Trajetória</Link> </li>
        //     </ul>
        // </nav>

        <nav>
            <ul className="menu">
                {conteudo.map((item: MenuItem) => (
                    <li key={item.id} className="hover:text-black">
                        <Link href={item.url}>{item.nome}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}