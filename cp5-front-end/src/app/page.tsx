"use client";
import { NasaImage } from "@/types/NasaImagem";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [imagens, setImagens] = useState<NasaImage[]>([]);

  useEffect(() => {
    const fetchNasaImages = async () => {
      try {
        const response = await fetch("/api/nasa");

        if (!response.ok) {
          console.log(response)
          throw new Error('erro em pegar dados da API');
        }
        const data = await response.json();
        setImagens(data);
      } catch (erro) {
        console.error('Erro ao buscar imagens:', erro);
      }
    };

    fetchNasaImages();
  }, []);

  return (
    <div>
      <h2>imagens da nasa</h2>
      <div>
        {imagens.map((imagem, index) => {
          const [data, hora] = imagem.date.split(" ");
          const [ano, mes, dia] = data.split("-");

          const imagemUrl = `https://epic.gsfc.nasa.gov/archive/natural/${ano}/${mes}/${dia}/png/${imagem.image}.png`;

          return (
            <div key={index}>
              <Image src={imagemUrl} alt={imagem.caption} width={200} height={200} />
              <h3>{imagem.caption}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
