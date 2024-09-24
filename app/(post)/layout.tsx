'use client';

import { useEffect } from "react";

import PostNavigation from "@/components/PostNavigation";
import PostHeader from "@/components/PostHeader";

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  useEffect(() => {
    // TODO: enable
    // window.scrollTo(0,0);
  }, []);


  return (
    <>
      <PostNavigation />
      <PostHeader />
      <main>
        <div className='w-full'>
          <div className='mx-auto py-12 px-12 max-md:px-6 xl:w-4/5 2xl:w-3/5'>
            <article>
              {children}
            </article>
          </div>
        </div>

      </main>
    </>
  );
}