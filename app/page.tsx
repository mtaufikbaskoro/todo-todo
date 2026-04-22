import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-md flex-col items-center justify-evenly py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="text-center w-full space-y-2">
          <h1 className="font-bold text-4xl">TODO TODO</h1>
          <h3 className="font-light">An app for your weekly tasks</h3>
        </div>
        <div className="w-full space-y-2">
          <Link href={"/sign-in"} className="w-full block">
            <Button className={"w-full"} variant="outline">Sign In</Button>
          </Link>
          <Link href={"/sign-up"} className="w-full block">
            <Button className={"w-full"}>Sign Up</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
