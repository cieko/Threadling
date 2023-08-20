//
import { UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";

//
import ThreadCard from "@/components/cards/ThreadCard";

import { fetchPosts } from "@/lib/actions/thread.actions";

//style
import styles from "./page.module.css";

export default async function Home() {
  const user = await currentUser();
  const result = await fetchPosts(1, 30);

  return (
    <div suppressHydrationWarning>
      <h1 className={`head-text text-left ${styles["bg-threadling"]}`}>Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
}
