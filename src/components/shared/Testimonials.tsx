import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "Desde 2020 tengo el honor de contar con Anna como speaker de los eventos del MasterMind en los que siempre aporta muchísimo valor desvelando sus secretos de marketing.",
    author: "Patrick Wind",
    role: "CEO Ads Accelerator",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    content:
      "Anna posee una habilidad increíble para brindar claridad y visión de manera cercana y sumamente profesional. Captó mis objetivos y me dio herramientas que pude aplicar de inmediato.",
    author: "Roberto Sánchez",
    role: "Asesor de imagen",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    content:
      "He trabajado con muchos mentores en los últimos 12 años, y no ha habido ninguno que se haya implicado tanto en mi proyecto y que tuviera las ideas tan claras como Anna.",
    author: "Ángel Alegre",
    role: "Vivir al Máximo",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    content:
      "Anna es una mentora extremadamente generosa, brillante y ejecutiva. Me ha ayudado a simplificar mi negocio para que pueda centrarme en las áreas que más aporto.",
    author: "Mireia Solsona",
    role: "Etsy Lovers",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
];

export default function Testimonial() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      <h2 className="text-4xl font-bold mb-4 text-center">
        <Sparkles className="inline-block w-8 h-8 text-pink-500 mr-2" />
        <span className="text-pink-500">Testimonios</span> de mis clientes
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Conoce la experiencia que han tenido algunos de los clientes que han
        trabajado conmigo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg relative">
            <p className="mb-4">{testimonial.content}</p>
            <div className="flex items-center">
              <Image
                width={1000}
                height={1000}
                src={testimonial.imageUrl}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-pink-500">
                  — {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-6xl text-pink-500 opacity-50">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
