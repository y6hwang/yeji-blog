'use client';

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';


import { HiArrowUp, HiHome } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

import { TileProps } from "@/components/gallery/Tile";
import NavButton from "@/components/NavButton";

import { jsTileList } from "@/constants/jsTileList";
import { reactTileList } from "@/constants/reactTileList";
import { nextTileList } from "@/constants/nextTileList";
import { dsaTileList } from "@/constants/dsaTileList";


export default function PostNavigation() {
  const router = useRouter();
  const params = usePathname();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const [lang, setLang] = useState<string>('');
  const [concept, setConcept] = useState<string>('');
  const [postList, setPostList] = useState<TileProps[]>([]);
  const [curPost, setCurPost] = useState<TileProps>();

  useEffect(() => {
    // TODO: enable
    // window.scrollTo(0,0);

    setLang(params.split('/')[1]);
    setConcept(params.split('/')[2]);
    setIsNavOpen(false);
  }, [params]);

  useEffect(() => {
    if (!lang.length || !concept.length) return;
    let list: TileProps[] = [];
    if (lang === 'js') list = jsTileList;
    else if (lang === 'react') list = reactTileList;
    else if (lang === 'next') list = nextTileList;
    else if (lang === 'dsa') list = dsaTileList;

    list = list.filter((post) => post.href !== undefined);
    const post = list.filter((d) => d.href == `/${lang}/${concept}`)[0];
    setPostList(list);
    setCurPost(post);
  }, [lang, concept]);;

  return (
    <>
      {/* scroll, home, nav buttons */}
      <div className='fixed right-0 bottom-0 p-8 flex flex-col gap-4 z-10'>
        <button
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
          className='p-2 border-2 rounded-full bg-white'>
          <HiArrowUp className='text-teal-900 text-2xl' />
        </button>
        <NavButton
          className='p-2 border-2 rounded-full bg-white'
          navigate={() => router.push('/')}
          icon={<HiHome className='text-teal-900 text-2xl' />}
        />
        <button onClick={() => setIsNavOpen(!isNavOpen)} className='p-2 border-2 rounded-full bg-white max-lg:hidden'>
          {isNavOpen ?
            <IoIosArrowForward className='text-teal-900 text-2xl' />
            :
            <HiMenu className='text-teal-900 text-2xl' />}
        </button>
      </div>
      {/* nav menu */}
      <div className={`fixed w-64 right-0 bottom-0 mb-8 mr-24 z-10 ${isNavOpen ? 'block' : 'hidden'}`}>
        <div ref={navRef} className='border bg-gray-100 rounded-xl divide-y'>
          {postList.map((d) => (
            <div key={`topic_${d.name}`}>
              <button
                className='w-full px-4 py-3 text-start rounded-xl text-primary
                hover:bg-teal-700 hover:text-lightgray disabled:bg-teal-700 disabled:font-semibold disabled:text-lightgray'
                onClick={() => router.push(d.href ? d.href : '/')}
                disabled={curPost?.name === d.name}>
                {d.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};