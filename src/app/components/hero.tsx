import React from "react";
import { Heebo } from "next/font/google";
import Image from "next/image";
import profile from "../../../public/figma.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Link from "next/link";

const heebo = Heebo({ subsets: ["latin"] });
const Hero = () => {
  return (
    <div className="p-6 my-[66px] mx-auto w-[95%] md:w-[1030px] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between">
      {/* text div */}
      <div className="md:w-[521px] md:h-[305px] flex flex-col md:justify-between items-start justify-evenly">
        <h1
          className={`${heebo.className} text-[27px] md:text-[48px] font-black text-myBlack`}
        >
          Hi, I am John,
          <br />
          Creative Technologist
        </h1>
        <p
          className={`${heebo.className} text-myBlack font-normal md:mt-0 mt-8 text-xl md:text-[16px]`}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Download Resume
        </p>
        <br />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className={`${heebo.className}text-[18px] font-medium rounded-sm text-white w-[205px] h-[50px]
             bg-myPink shadow-md shadow-black/55 hover:bg-white hover:text-myBlack`}
            >
              {" "}
              Download Resume
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure to download resume.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Link href="https://milestone1-2-pic.vercel.app/" target="alt">
                <AlertDialogAction className="bg-myPink hover:bg-white hover:text-myBlack duration-300">
                  Download
                  <AiOutlineCloudDownload className="text xl ml-2" />
                </AlertDialogAction>
              </Link>
              <AlertDialogCancel className="bg-myPink text-white  duration-300 w-[125px]">
                Cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      {/* image div */}
      <div className="w-[292px] h-[299px] relative">
        <Image
          className="z-50"
          src={profile}
          alt="figma-image"
          width={292}
          height={299}
        />
        <div className="bg-heroElipse w-[292px] h-[299px] rounded-full absolute top-1 right-1 -z-10" />
      </div>
    </div>
  );
};

export default Hero;
