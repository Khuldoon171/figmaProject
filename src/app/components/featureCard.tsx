import * as React from "react";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Profile from "../../../public/Rectangle 30.png";
import { Heebo } from "next/font/google";
import Profile32 from "../../../public/Rectangle 32.png";
import Profile34 from "../../../public/Rectangle 34.png";
import Footer from "./footer";

const heebo = Heebo({ subsets: ["latin"] });

export function FeatureCard() {
  return (
    <div className="w-[100%] md:w-[919px] h-[934.2px] mx-auto bg-background">
      <Card className="divide-x-2 md:flex justify-start items-start gap-5 border-hidden">
        <Image
          className="rounded-md flex-auto"
          src={Profile}
          alt="alt"
          width={246}
          height={246}
        />
        <div className="w-[100%] md:w-[623.46px] h-[272.1px]">
          <h3 className={`${heebo.className} text-[30px] font-bold`}>
            Designing Dashboards
          </h3>
          <br />
          <p
            className={`${heebo.className} bg-myPink rounded-xl text-[18px] w-[68px] h-[24px] text-center text-white`}
          >
            2020{" "}
          </p>
          <p>Dashboard</p>
          <br />

          <p className={`${heebo.className} text-[18px]`}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </Card>

      <Card className="divide-x-2 md:flex justify-start items-start gap-5 my-5 border-hidden">
        <Image
          className="rounded-md flex-auto"
          src={Profile32}
          alt="alt"
          width={246}
          height={246}
        />
        <div className="w-[100%] md:w-[623.46px] h-[272.1px]">
          <h3 className={`${heebo.className} text-[30px] font-bold`}>
            Designing Dashboards
          </h3>
          <br />
          <p
            className={`${heebo.className} bg-myPink rounded-xl text-[18px] w-[68px] h-[24px] text-center text-white`}
          >
            2020{" "}
          </p>
          <p>Dashboard</p>

          <p className={`${heebo.className} text-[17px]`}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </Card>
      <Card className="divide-x-2 md:flex justify-start items-start gap-5 border-hidden">
        <Image
          className="rounded-md flex-auto"
          src={Profile34}
          alt="alt"
          width={246}
          height={246}
        />
        <div className="w-[100%] md:w-[623.46px] h-[272.1px]">
          <h3 className={`${heebo.className} text-[30px] font-bold`}>
            Designing Dashboards
          </h3>
          <br />
          <p
            className={`${heebo.className} bg-myPink rounded-xl text-[18px] w-[68px] h-[24px] text-center text-white`}
          >
            2020{" "}
          </p>
          <p>Dashboard</p>

          <p className={`${heebo.className} text-[17px]`}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </Card>
      <Footer />
    </div>
  );
}
