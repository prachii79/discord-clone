import { UserButton } from "@clerk/nextjs";
const state = true;
export default function Home() {
  return (
    <div className="" >
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
