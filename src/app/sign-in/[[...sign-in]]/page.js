//I am going to use the SignIn component from clerk
import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center p-1 border border-gray-300 rounded-lg shadow-lg">
      {/* You can customise this page further */}
      <h1>Welcome tosocial posts!</h1>
      <h2>Sign in, please!</h2>
      <SignIn />
    </div>
  );
}
