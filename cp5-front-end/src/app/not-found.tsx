import Image from "next/image";

export default function NotFound() {
    return (
        <div>
            <h1>404 - NotFound</h1>
            <h2>This page could not be found.</h2>
            <Image layout="fill" src="" alt="Página de erro." />
            <Image layout="intrinsic" src="" alt="Página de erro." width={400} height={400} />
        </div>
    )
}