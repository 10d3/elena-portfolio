import React from "react";
import { Check, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export default function Achievement() {
  const s = useTranslations("AchievementPage");
  const achievements = [
    {
      highlight: s("Achievements.First.Highlight"),
      description: s("Achievements.First.Description"),
    },
    {
      highlight: s("Achievements.Second.Highlight"),
      description: s("Achievements.Second.Description"),
    },
    {
      highlight: s("Achievements.Third.Highlight"),
      description: s("Achievements.Third.Description"),
    },
    {
      highlight: s("Achievements.Fourth.Highlight"),
      description: s("Achievements.Fourth.Description"),
    },
    {
      highlight: s("Achievements.Fifth.Highlight"),
      description: s("Achievements.Fifth.Description"),
    },
    {
      highlight: s("Achievements.Sixth.Highlight"),
      description: s("Achievements.Sixth.Description"),
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-4xl font-bold mb-8 text-center">
        <Sparkles className="inline-block w-8 h-8 text-pink-500 mr-2" />
        {s("Title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start">
            <Check className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0 mt-1" />
            <p>
              <span className="font-semibold">{achievement.highlight}</span>{" "}
              {achievement.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center relative">
        <Button className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-pink-600 transition-colors">
          {s("ButtonText")}
        </Button>
        <svg
          className="absolute -right-4 bottom-full mb-2"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2Z"
            fill="#EC4899"
          />
          <path
            d="M20 9C20.5523 9 21 9.44772 21 10V30C21 30.5523 20.5523 31 20 31C19.4477 31 19 30.5523 19 30V10C19 9.44772 19.4477 9 20 9Z"
            fill="#EC4899"
          />
          <path
            d="M30 20C30 20.5523 29.5523 21 29 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H29C29.5523 19 30 19.4477 30 20Z"
            fill="#EC4899"
          />
        </svg>
      </div>
    </div>
  );
}

const achievements = [
  {
    highlight:
      "Llevar mi propia empresa Instituto Webinar de 0 a más de 3.5M€ de facturación",
    description: "en tan solo 3 años desde su formación.",
  },
  {
    highlight:
      "Cumplir mi sueño de vivir viajado en 2022, año en el que visité 14 países",
    description: "mientras seguía haciendo crecer mi empresa.",
  },
  {
    highlight: "Transformar a más de +33.000 personas con mis clases online",
    description:
      "en las que enseño a vender con estabilidad con mi propia metodología.",
  },
  {
    highlight: "Mudarme a Andorra y luego a Dubai, donde resido ahora",
    description:
      "y me inspira por su mentalidad de crecimiento y apertura a la espiritualidad.",
  },
  {
    highlight:
      "Crear 8 guiones de webinars que facturan más de 1 millón al año",
    description: "e impactan de forma positiva al mundo gracias a las ventas.",
  },
  {
    highlight:
      "Convertir mi negocio en mi mayor fuente de abundancia y crecimiento personal",
    description: "porque me genera ventas sin comprometer mi libertad.",
  },
];
