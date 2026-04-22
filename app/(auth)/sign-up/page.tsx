import SignUpForm from "@/components/form/sign-up"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


const Page = () => {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
            <main className="flex flex-1 w-full max-w-md flex-col items-center justify-center gap-12 py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="w-full text-center space-y-2">
                    <h1 className="font-bold text-4xl">TODO TODO</h1>
                    <h3 className="font-light">Sign Up Page</h3>
                </div>
                <div className="w-full">
                    <SignUpForm />
                </div>
                <div className="w-full space-y-2">
                    <div className="w-full flex items-center gap-2">
                        <Link href={"/"} className="flex-1">
                            <Button className={"w-full"} variant={"ghost"}>
                                <ArrowLeft /> Kembali
                            </Button>
                        </Link>
                        <Link href={"/sign-in"} className="flex-1">
                            <Button variant={"outline"} className="w-full">Sign In</Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page