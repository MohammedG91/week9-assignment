import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function CreateProfile({ params }) {
  const slug = await params;

  async function handleSubmit(formValues) {
    "use server";

    const username = formValues.get("username");
    const about = formValues.get("about");
    const clerkid = slug.id;

    db.query(
      `INSERT INTO profile (clerkid,username,about) VALUES ($1, $2, $3)`,
      [clerkid, username, about]
    );

    revalidatePath("/profile");

    redirect("/profile");
  }

  return (
    <div className="flex flex-col items-center justify-center p-1 border min-w-full bg-slate-400 border-gray-300 rounded-lg shadow-lg">
      <h1>create profile</h1>

      <form
        action={handleSubmit}
        className="flex flex-col justify-center items-center border-2 border-solid border-gray-500 w-[25rem] p-6 rounded-lg"
      >
        <label htmlFor="username">username: </label>

        <input
          type="text"
          name="username"
          id="username"
          required
          className="text-emerald-600"
        />

        <label htmlFor="about">About: </label>
        <textarea
          type="text"
          name="about"
          id="about"
          required
          className="text-emerald-600  h-20"
        />

        <button
          type="submit"
          className="border-amber-600 border-4 m-4 hover:bg-sky-700"
        >
          Submit your profile
        </button>
      </form>
    </div>
  );
}
