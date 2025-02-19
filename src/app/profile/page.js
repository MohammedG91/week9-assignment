import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
export default async function UserProfilePage() {
  const { userId } = await auth();

  const id = userId;

  const user = await db.query(`SELECT * FROM profile WHERE clerkid=$1`, [id]);

  // if user doent have profile

  if (!user.rows.length) {
    return (
      <div className="flex flex-col items-center justify-center p-1 border min-w-full bg-slate-400 border-gray-300 rounded-lg shadow-lg">
        <h1>welcome,please create your profile!</h1>
        <Link href={`/profile/${id}/createprofile`} className="bg-green-700">
          CREATE PROFILE
        </Link>
      </div>
    );
  }

  const wrangleduser = user.rows[0];
  console.log(wrangleduser);

  // if user have profile they see this
  return (
    <>
      <div className="flex flex-col items-center justify-center p-1 border min-w-full bg-slate-400 border-gray-300 rounded-lg shadow-lg">
        <h1>My profile </h1>

        <h2>My username: {wrangleduser.username}</h2>
        <p>About Me: {wrangleduser.about}</p>

        <nav className="flex gap-5">
          <button>
            <Link href={`/profile/${id}/update`} className="bg-blue-700">
              update profile
            </Link>
          </button>
          <button>
            <Link href={`/profile/${id}/delete`} className="bg-red-500">
              delete profile
            </Link>
          </button>
        </nav>
      </div>

      <div className="flex flex-col items-center justify-center p-1 border min-w-full bg-slate-400 border-gray-300 rounded-lg shadow-lg">
        <h1>link to my viewable global profile</h1>

        <nav className="flex gap-6">
          <button>
            <Link
              href={`/user/${wrangleduser.username}`}
              className="bg-blue-700"
            >
              my user page
            </Link>
          </button>
          <button>
            <Link
              href={`/post/${wrangleduser.id}/createpost`}
              className="bg-red-500"
            >
              adding posts
            </Link>
          </button>
        </nav>
      </div>
    </>
  );
}
