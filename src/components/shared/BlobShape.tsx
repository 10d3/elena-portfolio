import Image from "next/image";

const BlobShape = ({ image }: { image: string }) => {
  return (
    <div className="relative w-full h-full">
      {/* Première forme avec bordure arrondie */}
      <div
        className="absolute w-full h-full bg-fuchsia-500"
        style={{
          borderRadius: "54% 46% 66% 34% / 30% 50% 50% 70%",
        }}
      ></div>

      {/* Deuxième forme avec bordure arrondie */}
      <div
        className="absolute w-full h-full bg-purple-500"
        style={{
          borderRadius: "75% 25% 86% 14% / 35% 36% 64% 65%",
        }}
      ></div>

      {/* Image par-dessus les formes */}
      <div
        className="absolute w-full h-full overflow-hidden"
        style={{
          borderRadius: "75% 25% 86% 14% / 35% 36% 64% 65%",
        }}
      >
        <Image
          className="w-auto h-full"
          src={image} // Utilisation de la prop `image`
          alt="Image inside blob "
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BlobShape;
