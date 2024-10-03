"use client"

import { useParams } from 'next/navigation';
import { paginas } from '@/data/conteudo';
import Menu from '@/components/Menu/Menu';

export default function PaginaDinamica() {
    const { id } = useParams();

    const pagina = paginas.find((p) => p.id.toString() === id);

    if (!pagina) {
        return <div>Página não encontrada</div>;
    }

    return (
        <>
            <Menu />
            <div className="container">
                <h1 className="titulo">{pagina.nome}</h1>
                <p className="texto">{pagina.conteudo}</p>
            </div>
        </>
    );
}
