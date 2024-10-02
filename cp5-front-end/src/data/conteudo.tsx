/*
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

criando um lista com essas paginas para criar rotas dinamicas
*/

export const paginas = [
    {
        "id": 1,
        "nome": "Home",
        "conteudo": "Velikovsky propôs em seu livro 'Mundos em Colisão', teorias que divergem e tentavam explicar acontecimentos na história humana e geológica. Uma de suas teorias eram que as orbitas planetárias de Vénus e Marte não seriam convencionais, podendo colidir ou até se aproximar da Terra, teoria essa que contradiz a de Newton sobre orbitas estáveis a longo prazo. Suas teorias, mesmo que pra época, já eram controversas propondo a colisão de atros ou mudanças em suas orbitas, que resultaria na explicação de diversos eventos bíblicos e geológicos na Terra, portanto Velikovsky é lembrado por suas teorias polêmicas."
    },
    {
        "id": 2,
        "nome": "Órbitas Planetárias",
        "conteudo": "Volikovsky propôs que as forças gravitacionais e eletromagnéticas seriam a base para eventos cataclísmicos na história da humanidade, sugeriu que, também, as mudanças repentinas nas órbitas dos planetas próximos, contrariando o entendimento atual das órbitas definidas e estáveis. O mesmo citou é postulou que as forças eletromagnéticas poderiam ter desempenhado um papel significativo nos encontros próximos, algo que contraria o modelo puramente gravitacional aceito na física celeste. Ele sugeriu que os cálculos gravitacionais sozinhos não explicavam adequadamente as interações planetárias"
    },
    {
        "id": 3,
        "nome": "Cronologia de Eventos",
        "conteudo": "Immanuel Velikovsky propôs explicar em seu livro “Mundo em Colisão” a criação de atros e grandes catástrofes históricas. Podemos citar aqui a origem de Vênus, sendo em sua teoria, que foi expelida por Júpiter como um cometa, após isso o planeta veio em direção a Terra, um impacto não é citado em seu livro. Tal passagem influencio diretamente a órbita do nosso planeta, causando diversos desastres que posteriormente seriam integrados em mitologias e religiões. Um exemplo que pode ser falado é a praga do Egito e a história do Êxodo á passagens planetária, o mesmo propõe que a 'mão de Deus', uma série de eventos que evolvem pragas e outras calamidades, poderia ser fruto de uma perturbação planetárias."
    },
    {
        "id": 4,
        "nome": "Forças Gravitacionais",
        "conteudo": "Volikovsky propôs que as forças gravitacionais e eletromagnéticas seriam a base para eventos cataclísmicos na história da humanidade, sugeriu que, também, as mudanças repentinas nas órbitas dos planetas próximos, contrariando o entendimento atual das órbitas definidas e estáveis. O mesmo citou é postulou que as forças eletromagnéticas poderiam ter desempenhado um papel significativo nos encontros próximos, algo que contraria o modelo puramente gravitacional aceito na física celeste. Ele sugeriu que os cálculos gravitacionais sozinhos não explicavam adequadamente as interações planetárias propostas em suas teorias."
    },
    {
        "id": 5,
        "nome": "Velocidade e Trajetória",
        "conteudo": "Velikovsky propôs que Vênus teria sido expulsa de Júpiter como um cometa e, em seguida, passou perto da Terra antes de se estabelecer na sua órbita atual. Isso teria ocorrido num curto período de tempo, algo que desafiava as equações de mecânica orbital clássica, que sugerem que as mudanças de órbita de planetas e corpos celestes são lentas e estáveis. Embora Velikovsky tenha sido fortemente criticado por cientistas da época, suas ideias provocaram debates sobre a validade dos cálculos tradicionais na astronomia e a possibilidade de eventos cósmicos catastróficos no passado histórico da Terra. No entanto, suas teorias não foram apoiadas por observações astronômicas ou por modelos matemáticos aceitos pela comunidade científica."
    }
]