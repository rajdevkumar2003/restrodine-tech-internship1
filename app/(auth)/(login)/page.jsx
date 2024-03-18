import LoginForm from '@/components/LoginForm'
import Image from "next/image";
//import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="flex items-center justify-between  gap-3 max-md:flex-col py-10">
      <Image
        alt="icon1"
        width={560}
        height={320}
        className="flex max-md:w-[320px] mx-auto "
        src={"/assets/image.png"}
      />
     <LoginForm/>

    </div>
  );
};

export default login;
