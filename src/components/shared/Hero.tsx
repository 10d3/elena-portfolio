import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  const services = [
    {
      option: "Branding",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      option: "UI/UX",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      option: "Product Design",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <section className="min-h-screen w-full p-0 m-0 flex flex-col justify-center items-center gap-24">
      <div className="flex flex-row w-full items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-between flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-2xl">Hi, there!</span>
            <h1 className="text-9xl">Luxe is here to be your assistance</h1>
          </div>
          <p className="text-2xl">
            I am here ready to help you in making creative digital products
          </p>
          <Button size="sm" className="w-[180px] h-[60px] rounded-md text-xl">
            Let&apos;s discuss
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image src='https://placehold.co/600x400@2x.png' className="w-[600px] h-[400px]" height={1000} width={1000} alt="image"/>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-4xl">Our Service</h1>
        <div className="flex flex-row justify-evenly">
          {services.map((service, i) => (
            <div key={i}>
              <h2>{service.option}</h2>
              <p>{service.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
