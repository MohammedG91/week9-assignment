import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpdateProfile({ params }) {
  const slug = await params;

  const user = await db.query(`SELECT * FROM profile WHERE clerkid=$1`, [
    slug.id,
  ]);

  const wrangleduser = user.rows[0];
  console.log(wrangleduser);

  async function handleUpdate(formData) {
    "use server";

    const username = formData.get("username");
    const about = formData.get("about");

    await db.query(
      `UPDATE profile SET username =$1, about =$2 WHERE clerkid=$3`,
      [username, about, slug.id]
    );
    revalidatePath("/profile");

    redirect("/profile");
  }

  return (
    <div className="flex flex-col items-center justify-center p-1 border min-w-full bg-slate-400 border-gray-300 rounded-lg shadow-lg">
      <h1>Update profile</h1>

      <form
        action={handleUpdate}
        className="flex flex-col justify-center items-center border-2 border-solid border-gray-500 w-[25rem] p-6 rounded-lg"
      >
        <label htmlFor="username">username: </label>

        <input
          type="text"
          name="username"
          id="username"
          required
          defaultValue={wrangleduser.username}
          className="text-emerald-600"
        />

        <label htmlFor="about">About: </label>
        <textarea
          type="text"
          name="about"
          id="about"
          required
          defaultValue={wrangleduser.about}
          className="text-emerald-600  h-20"
        />

        <button
          type="submit"
          className="border-amber-600 border-4 m-4 hover:bg-sky-700"
        >
          update your profile
        </button>
      </form>
    </div>
  );
}
