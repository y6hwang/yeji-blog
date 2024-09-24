'use client';

import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';

import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri"

import { TileProps } from "@/components/gallery/Tile";
import NavButton from "@/components/NavButton";

import { jsTileList } from "@/constants/jsTileList";
import { reactTileList } from "@/constants/reactTileList";
import { nextTileList } from "@/constants/nextTileList";
import { dsaTileList } from "@/constants/dsaTileList";


export default function PostHeader() {
  const router = useRouter();
  const params = usePathname();

  const [lang, setLang] = useState<string>('');
  const [concept, setConcept] = useState<string>('');
  const [curPost, setCurPost] = useState<TileProps>();
  const [prevPost, setPrevPost] = useState<TileProps>();
  const [nextPost, setNextPost] = useState<TileProps>();

  useEffect(() => {
    setLang(params.split('/')[1]);
    setConcept(params.split('/')[2]);
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
    const prev = post?.id == 1 ? undefined : list.filter((d) => d.id === post.id - 1)[0];
    const next = post?.id == list.length ? undefined : list.filter((d) => d.id === post.id + 1)[0];

    setCurPost(post);
    setPrevPost(prev);
    setNextPost(next);
  }, [lang, concept]);

  return (
    <>
      <div className='w-full py-4 flex flex-row items-center justify-between z-10 lg:p-12'>
        <NavButton
          className='basis-1/4 max-lg:px-8'
          navigate={() => router.push(prevPost?.href ? prevPost.href : '/')}
          icon={<HiArrowLeftCircle className={`text-teal-900 text-2xl ${prevPost ? 'block' : 'hidden'}`} />}
          value={prevPost?.name}
        />
        <div className='flex flex-row items-center gap-4'>
          <Logo lang={lang} />
          <h1
            className="text-center text-2xl font-semibold text-textblack lg:text-3xl 2xl:text-4xl">
            {curPost?.name}
          </h1>
        </div>
        <NavButton
          className='flex-row-reverse basis-1/4 max-lg:px-8'
          navigate={() => router.push(nextPost?.href ? nextPost.href : '/')}
          icon={<HiArrowRightCircle className={`text-teal-900 text-2xl ${nextPost ? 'block' : 'hidden'}`} />}
          value={nextPost?.name}
        />
      </div>
    </>

  );
};


const Logo = ({ className, lang }: {
  className?: string;
  lang: string;
}): ReactElement | null => {
  if (lang === 'js') {
    return <BiLogoJavascript className={`text-3xl text-[#F4CF2A] ${className}`} />;
  } else if (lang === 'react') {
    return <BiLogoReact className={`text-3xl text-[#0c7ca4] ${className}`} />;
  } else if (lang === 'next') {
    return <RiNextjsFill className={`text-3xl text-black ${className}`} />;
  }
  return <></>;
}