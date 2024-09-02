import { posts } from "#site/content";
import { PostItem } from "@/components/shared/postItem";

export default function page() {
  const displayPosts = posts;
  return (
    <section className="min-h-screen w-full p-0 m-0 flex flex-col justify-center items-center ">
      <h1>Welcome to my first blog</h1>
      <div className="w-full md:w-1/2">
        {displayPosts?.length > 0 ? (
          <ul className="flex flex-col">
            {displayPosts.map((post) => {
              const { slug, date, title, description, tags } = post;
              return (
                <li key={slug}>
                  <PostItem
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                    tags={tags}
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
