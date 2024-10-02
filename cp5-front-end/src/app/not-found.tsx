import Image from "next/image";
import ImagemErro from "../assets/erro_404_.jpg";
import Menu from "@/components/Menu/Menu";

export default function NotFound() {
    return (
        <>
            <Menu/>
            <div className="Imagem">
              <Image layout="intrinsic" src={ImagemErro} alt="Página de erro." />
            </div>
        </>
        
    )
}