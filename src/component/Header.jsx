import Link from "next/link";
import headerStyles from "../app/header.module.css";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>Social Posts</h1>
      <nav>
        <Link href={"/"} className={headerStyles.navLink}>
          Home
        </Link>

        <Link href={"/post"} className={headerStyles.navLink}>
          Posts
        </Link>
        <Link href={"/profile"} className={headerStyles.navLink}>
          Profile
        </Link>
        <SignedIn>
          {/* this will show when the user is signed-in */}

          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />

          <SignUpButton />
        </SignedOut>
      </nav>
    </header>
  );
}
