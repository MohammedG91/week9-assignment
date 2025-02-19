import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteProfile({ params }) {
  const slug = await params;

  async function handleDelete() {
    "use server";

    //query the db
    await db.query(`DELETE FROM profile WHERE clerkid= $1`, [slug.id]);

    revalidatePath("/profile");
    redirect("/profile");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center p-1 border min-w-full bg-slate-400 border-gray-300 rounded-lg shadow-lg">
        <h1>Delete a profile</h1>
        <form action={handleDelete}>
          <button
            type="submit"
            className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
          >
            Are you sure you want to delete your profile?
          </button>
        </form>
      </div>
    </>
  );
}
