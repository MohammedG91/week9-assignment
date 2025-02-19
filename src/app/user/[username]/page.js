import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { notFound } from "next/navigation";

export default async function Userpage({ params }) {
  const { userId } = await auth();

  const slug = await params;
  console.log(slug);

  const user = await db.query(`SELECT * FROM profile WHERE username=$1`, [
    slug.username,
  ]);

  if (!user.rows.length === 0) {
    notFound();
  }

  const wrangleduser = user.rows[0];
  //   const posts =

  return (
    <>
      <div className="flex flex-col items-center justify-center p-1 border min-w-full bg-slate-400 border-gray-300 rounded-lg shadow-lg">
        <h1>My profile </h1>

        <h2>My username: {wrangleduser.username}</h2>
        <p>About Me: {wrangleduser.about}</p>
        {userId === wrangleduser.clerkid && (
          <div className="flex items-center justify-center p-2 gap-3">
            <Link
              href={`/post/${wrangleduser.id}`}
              className="bg-gray-100 hover:bg-gray-300 transition-colors duration-200 p-2 rounded text-black"
            >
              Add Post
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center p-1 border min-w-full bg-slate-400 border-gray-300 rounded-lg shadow-lg">
        <h1>all posts</h1>
        {/* map all posts here */}
      </div>
    </>
  );
}
