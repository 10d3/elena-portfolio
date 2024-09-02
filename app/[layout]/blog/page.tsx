import { posts } from "#site/content";
import { PostItem } from "@/components/shared/postItem";

export default function page() {
  const displayPosts = posts;
  return (
    <section className="min-h-screen w-full p-0 m-0 flex flex-col items-center md:pt-32 ">
      <h1 className="text-4xl">Welcome to my first blog</h1>
      <div className="w-full md:w-1/2">
        {displayPosts?.length > 0 ? (
          <ul className="flex flex-col">
            {displayPosts.map((post) => {
              const { slug, date, title, description, tags, image } = post;
              return (
                <li key={slug}>
                  <PostItem
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                    tags={tags}
                    image = {image}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </section>
  );
}
