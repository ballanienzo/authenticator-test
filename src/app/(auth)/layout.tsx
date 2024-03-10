import Image from "next/image";
import { PropsWithChildren } from "react";
import BackgroundImage from "../../../public/Netflix-Background.jpg";
import Logo from "../../../public/Netflix-Logo.png";

export default function AuthLayout({ children}: PropsWithChildren) {
    return (
      <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
        <Image src={BackgroundImage} alt="background image" className="hidden md:flex sm:object-cover -z-10 brightness-50" priority fill/>
        <Image src={Logo} alt="logo image" className="absolute left-4 top-4 object-contain md:left-10 md:top-6" width={200} height={200} priority/>
        {children}
      </div>
  )
}
