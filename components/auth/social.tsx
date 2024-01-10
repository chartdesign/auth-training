"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const onClick = () => {
  console.log("clicked");
};

export const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-2 '>
      <Button
        size='lg'
        className='w-full'
        variant='outline'
        onClick={() => onClick()}
      >
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button
        size='lg'
        className='w-full'
        variant='outline'
        onClick={() => onClick()}
      >
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};
