import Link from "next/link";

export default function notFound() {
  return (
    <div
      className={` flex justify-center flex-col items-center w-full sm:w-[500px] max-w-lg p-8 rounded-lg shadow-lg bg-white`}
    >
      <h1 className={` text-2xl font-semibold text-black mb-6`}>
        Sorry, this page does not exist.
      </h1>
      <nav>
        <Link
          href="/posts"
          className="text-black hover:bg-blue-300 w-full mt-6 p-1 rounded-md border-2 bg-blue-200 text-center"
        >
          All Posts
        </Link>
        <Link
          href="/"
          className="text-black hover:bg-green-500 w-full mt-6 p-1 rounded-md border-2 bg-emerald-200 text-center"
        >
          Homepage
        </Link>
      </nav>
    </div>
  );
}
