import { posts } from "#site/content";
import { notFound } from "next/navigation";
// import "@/styles/mdx.css";
import "../../../../styles/mdx.css";
import { Metadata } from "next";
import { MDXContent } from "@/components/mdx-components";
import { Tag } from "@/components/tag";
import { siteConfig } from "@/lib/site";
import { useLocale } from "next-intl";
interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  // Ignorer le premier segment de slug qui est la locale
  const slug = `blog/${params?.slug}`; // On ignore la locale (premier segment)
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

// export async function generateStaticParams(): Promise<
//   PostPageProps["params"][]
// > {
//   const locales = ["es", "ro"]; // Les locales disponibles

//   // Générer des chemins pour chaque locale et chaque post
//   return locales.flatMap((locale) =>
//     posts.map((post) => ({
//       slug: [locale, ...post.slugAsParams.split("/")], // Inclure la locale comme partie du slug
//     }))
//   );
// }

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className=" md:py-6 prose dark:prose-invert md:max-w-3xl mx-auto min-h-screen w-full md:pt-32 gap-24">
      <h1 className="mb-2 text-4xl">{post.title}</h1>
      <div className="flex gap-2 mb-2 w-full">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}
