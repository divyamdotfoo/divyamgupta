import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Link } from "@/components/link";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divyam Gupta",
  description: "Personal website",
};

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Skills } from "@/components/skills";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-background text-white`}>
        <div className=" max-w-6xl mx-auto py-8 flex lg:flex-row flex-col gap-4 px-4 xl:px-0 selection:bg-pink-700">
          <div className=" lg:hidden pb-4">
            <Navbar />
          </div>
          <div className=" flex max-md:flex-col md:flex-row lg:flex-col gap-3 lg:h-screen lg:max-w-sm max-w-xl md:max-w-3xl mx-auto">
            <div className=" flex flex-col gap-2">
              <h1 className=" text-4xl font-medium">Divyam Gupta</h1>

              <h2 className="tracking-wider leading-7 text-balance">
                Hi, I&#39;m learning how to build things on the internet,
                focusing on full-stack development with TypeScript and Next.js,
                and I&#39;m eager to join a team where I can quickly learn and
                grow.
              </h2>

              <div className=" flex gap-2 flex-wrap items-start">
                <Link variant="icon" href="https://github.com/divyamdotfoo">
                  <GitHubLogoIcon className=" w-4 h-4" />
                </Link>
                <Link variant="icon" href="https://x.com/divyamdotfoo">
                  <TwitterLogoIcon className=" w-4 h-4" />
                </Link>
                <Link
                  variant="icon"
                  href="https://linkedin.com/in/divyamdotfoo"
                >
                  <LinkedInLogoIcon className=" w-4 h-4" />
                </Link>
                <Link variant="icon" href="mailto:divyam7091@gmail.com">
                  <Mail className=" w-4 h-4" />
                </Link>
                <Link variant="icon" href="/resume">
                  Resume
                </Link>
              </div>
            </div>

            <div className=" w-full h-full pt-4">
              <Skills />
            </div>
          </div>
          <div className=" w-full">
            <div className=" hidden lg:block">
              <Navbar />
            </div>
            <div className="xl:px-16 lg:px-8 px-6 pt-6 w-full ">
              {children}

              <p className=" text-xs font-semibold opacity-80 w-fit mx-auto py-8">
                Last updated {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
