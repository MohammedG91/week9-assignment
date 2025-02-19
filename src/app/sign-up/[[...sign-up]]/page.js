//I am going to use the SignUp component from clerk
import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center p-1 border border-gray-300 rounded-lg shadow-lg">
      {/* You can customise this page further */}
      <h1>Welcome to social posts!</h1>
      <h2>Sign up, please, new user!</h2>
      <SignUp />
    </div>
  );
}
