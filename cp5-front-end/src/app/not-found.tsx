import Image from "next/image";
import ImagemErro from "../assets/erro_404_.jpg";

export default function NotFound() {
    return (
        <div>
            <h1>404 - NotFound</h1>
            <h2>This page could not be found.</h2>
            <Image layout="intrinsic" src={ImagemErro} alt="Página de erro." width={400} height={400} />
        </div>
    )
}