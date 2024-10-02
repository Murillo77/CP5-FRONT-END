import Image from "next/image";
import ImagemErro from "../assets/erro_404_.jpg";

export default function NotFound() {
    return (
        <div className="Imagem">
            <Image layout="intrinsic" src={ImagemErro} alt="Página de erro." width={500} height={200} />
        </div>
    )
}