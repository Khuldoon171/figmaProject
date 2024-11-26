import { Heebo } from "next/font/google";
import Link from "next/link";
import React from "react";
import RecentPostcard from "./recentPostcard";

const heebo = Heebo({ subsets: ["latin"] });

const RecentPost = () => {
  return (
    <div className="bg-recentBackground my-[66px] h-auto md:h-[502px] flex flex-col justify-evenly ">
      <div className="w-[92%] md:w-[1030px] p-6 mx-auto flex flex-col justify-between ">
        <div className="flex flex-row justify-between">
          <h2
            className={`${heebo.className} w-[100%] text-[16px] md:text-[22px] font-medium`}
          >
            Recent Post
          </h2>
          <Link
            href={""}
            className={`${heebo.className} w-[100%] text-[16px] md:text-[22px]  font-medium text-myPink`}
          >
            View all
          </Link>
        </div>
        <div className="mt-[16px] flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between">
          <RecentPostcard />
          <RecentPostcard />
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
