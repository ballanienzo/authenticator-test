import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

export default function SignUpPage() {
  return (
    <div className="mt-44 rounded bg-black/60 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Sign In</h1>
        <div className="space-y-4 mt-5">
          <Input type="email" name="email" placeholder="E-mail" className="bg-[#333] placeholder:text-xs placeholder:text-zinc-400 w-full inline-block" />
          <Button type="submit" variant={"destructive"} className="w-full bg-[#e50914]"> Sign In</Button>
        </div>

        <div className="text-zinc-500 text-sm mt-2">
          New to Netflix? <Link href="/sign-up" className="text-white hover:underline">Sign up now!</Link>
        </div>
        <div className="flex w-full justify-center items-center gap-3 mt-6">
          <Button variant={"outline"} size="icon"><VscGithubInverted className="size-6"/></Button>
          <Button variant={"outline"} size="icon"><FaGoogle className="size-6"/></Button>
        </div>
      </form>
    </div>
  )
}
