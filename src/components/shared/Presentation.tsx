import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Presentation() {
  const t = useTranslations("Presentation");
  return (
    <section className="flex flex-col items-center justify-center mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        <Sparkles className="w-8 h-8 mr-2 text-pink-500" />
      </h1>

      <p className="mb-4 text-justify">{t("intro")}</p>

      <p className="mb-4 text-justify">{t("first_webinar")}</p>

      <div className="relative mb-6">
        <Image
          width={1000}
          height={1000}
          src="/placeholder.svg?height=400&width=600"
          alt={t("image_alt")}
          className="rounded-lg shadow-lg"
        />
        <Sparkles className="absolute top-2 right-2 w-6 h-6 text-pink-500" />
      </div>

      <p className="mb-4 text-justify">{t("discomfort")}</p>

      <p className="mb-6 text-justify">{t("spiritual_marketing")}</p>

      <div className="flex justify-center">
        <Sparkles className="w-8 h-8 text-pink-500 mx-1" />
        <Sparkles className="w-8 h-8 text-pink-500 mx-1" />
        <Sparkles className="w-8 h-8 text-pink-500 mx-1" />
      </div>
    </section>
  );
}
