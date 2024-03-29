"use client"
import { sidebarLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSidebar = () => {
  return (
    <section className="flex max-md:absolute left-3 px-2 ">
      <div className="flex flex-col gap-10 z-10 w-[180px]">
        {sidebarLinks.map((links, id) => (
          <Link
            className="text-purple hover:text-black flex gap-2 font-semibold max-xs:hidden text-[17px]"
            id={id}
            href={links.route}
          >
            <Image
              alt={links.label}
              height={24}
              width={24}
              src={links.imgURL}
              className="text-purple"
            />
            <p className="block max-md:hidden">{links.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LeftSidebar;
