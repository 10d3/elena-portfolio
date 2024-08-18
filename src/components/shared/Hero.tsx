import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import BlobShape from "./BlobShape";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");
  const s = useTranslations("ServicePage")
  const services = [
    {
      option: s("First.Title"),
      detail: s("First.Description")
    },
    {
      option: s("Second.Title"),
      detail: s("Second.Description"),
    },
    {
      option: s("Third.Title"),
      detail: s("Third.Description"),
    },
  ];
  console.log(s("First.Title"))
  return (
    <section className="min-h-screen w-full p-0 m-0 flex flex-col justify-center items-center gap-24 ">
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 md:gap-0">
        <div className="w-full md:w-1/2 flex justify-between flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl">{t("spanText")}</span>
            <h1 className="text-5xl md:text-7xl">{t("title")}</h1>
          </div>
          <p className="text-xl md:text-2xl">
            {t("subtitle")}
          </p>
          <Button size="sm" className="px-8 py-6 w-fit rounded-md text-xl">
            {t("boutonPrin")}
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center h-[276px] md:h-[368px] md:px-24">
          <BlobShape image="https://placehold.co/600x400@2x.png" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-4xl">{s("Service")}</h1>
        <div className="flex w-full flex-col md:flex-row justify-between gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col gap-2 w-full md:w-1/${
                services.length + 1
              }`}
            >
              <h2 className="text-2xl md:text-2xl">{service.option}</h2>
              <p className="text-xl md:text-lg">{service.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
