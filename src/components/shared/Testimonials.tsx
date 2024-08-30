import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

export default function Testimonial() {
  const s = useTranslations("Testimonial");
  console.log(s("Testimonials.First.Content"));
  const testimonials = [
    {
      content: s("Testimonials.First.Content"),
      author: s("Testimonials.First.Author"),
      role: s("Testimonials.First.Role"),
      imageUrl: s("Testimonials.First.ImageUrl"),
    },
    {
      content: s("Testimonials.Second.Content"),
      author: s("Testimonials.Second.Author"),
      role: s("Testimonials.Second.Role"),
      imageUrl: s("Testimonials.Second.ImageUrl"),
    },
    {
      content: s("Testimonials.Third.Content"),
      author: s("Testimonials.Third.Author"),
      role: s("Testimonials.Third.Role"),
      imageUrl: s("Testimonials.Third.ImageUrl"),
    },
    {
      content: s("Testimonials.Fourth.Content"),
      author: s("Testimonials.Fourth.Author"),
      role: s("Testimonials.Fourth.Role"),
      imageUrl: s("Testimonials.Fourth.ImageUrl"),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      <h2 className="text-4xl font-bold mb-4 text-center">
        <Sparkles className="inline-block w-8 h-8 text-pink-500 mr-2" />
        {s("title")}
      </h2>
      <p className="text-center text-gray-600 mb-12">{s("description")}</p>

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
            <div className="absolute top-4 right-4 text-6xl text-pink-500 opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
