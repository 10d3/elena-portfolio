import { Calendar } from "lucide-react";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Tag } from "./tag";
import { useLocale } from "next-intl"; // Importer useLocale
import Image from "next/image";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  image?:string
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  image
}: PostItemProps) {
  const locale = useLocale(); // Utiliser useLocale pour obtenir la locale courante
  console.log(image)

  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          {/* Modifier le lien pour inclure la locale */}
          <Link href={`/${locale}/${slug}`}>{title}</Link>
        </h2>
        <div className="w-full">
        {image && <Image src={`${image}`} width={1000} height={1000} alt={`image of ${title}`}/>}
        </div>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        {/* Modifier le lien pour inclure la locale */}
        <Link
          href={`/${locale}/${slug}`}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
