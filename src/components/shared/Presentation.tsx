import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        <Sparkles className="w-8 h-8 mr-2 text-pink-500" />
        ¿Qué me hace <span className="text-pink-500 mx-2">diferente</span> de
        los demás?
      </h1>

      <p className="mb-4 text-justify">
        <strong>Soy Anna Raventós, marketer y coach de negocios online.</strong>{" "}
        Empecé a trabajar en el sector del marketing en 2016 como copywriter
        especializada en webinars.
      </p>

      <p className="mb-4 text-justify">
        <strong>El primer webinar que escribí facturó €500.000</strong> y ahí
        entendí que mi empatía y pasión por la psicología humana podían ayudar a
        muchas personas a vivir muy bien de su conocimiento.
      </p>

      <div className="relative mb-6">
        <Image
          width={1000}
          height={1000}
          src="/placeholder.svg?height=400&width=600"
          alt="Anna Raventós trabajando en su laptop"
          className="rounded-lg shadow-lg"
        />
        <Sparkles className="absolute top-2 right-2 w-6 h-6 text-pink-500" />
      </div>

      <p className="mb-4 text-justify">
        Aunque mis textos siempre lograron convertir a desconocidos en clientes,
        nunca terminé de sentirme cómoda usando técnicas de manipulación y
        escasez para vender.
      </p>

      <p className="mb-6 text-justify">
        Por eso llegó el día en el que{" "}
        <strong>
          decidí unir lo aprendido en mi práctica espiritual con el marketing
          tradicional
        </strong>
        , creando un enfoque honesto y respetuoso con las Leyes del Universo en
        el que las ventas se dan de forma natural.
      </p>

      <div className="flex justify-center">
        <Sparkles className="w-8 h-8 text-pink-500 mx-1" />
        <Sparkles className="w-8 h-8 text-pink-500 mx-1" />
        <Sparkles className="w-8 h-8 text-pink-500 mx-1" />
      </div>
    </section>
  );
}
