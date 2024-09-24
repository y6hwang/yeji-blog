import { ReactNode, ReactElement } from "react";
import Link  from 'next/link';

import {
  TopSection,
  Headline,
  Copy,
  SectionHeadline
} from "@/components/Typography";

import { IoLogoJavascript, IoIosDocument } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs, SiThealgorithms } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import { Gallery } from "@/components/gallery/Gallery";
import { WideTile } from "@/components/gallery/WideTile";
import { Tile } from "@/components/gallery/Tile";
import { Icon } from "@/components/gallery/Icon"

import { jsTileList } from "@/constants/jsTileList";
import { reactTileList } from "@/constants/reactTileList";
import { nextTileList} from "@/constants/nextTileList";
import { dsaTileList } from "@/constants/dsaTileList";

import { MStudioBackground } from "@/components/backgrounds/MStudioBackground";
import { PortfolioBackground } from "@/components/backgrounds/PortfolioBackground";


const MainPage = (): ReactElement | null => {

  const projectList = [
    {
      name: 'yeji/blog',
      copy: 'My first blog created by cloning Apps by .',
      bg: <div className='h-full'>
        {PortfolioBackground}
      </div>,
      href: 'https://github.com/y6hwang/yeji-blog',
      hrefMsg: 'Git',
      darkMode: false,
    },
    {
      name: 'M Studio',
      copy: 'Create your own video content using AI humans.',
      bg: <>
        <div className='h-full'>
          <div className='absolute top-[55%] left-1/2 -translate-x-1/2 z-10'>
            <img src='/images/img_mstudio_logo.png'/>
          </div>
          {MStudioBackground}
        </div>
      </>,
      href: 'https://mstudio.maum.ai/',
      hrefMsg: 'Visit',
      darkMode: true,
    },
    {
      name: 'AI Human Device',
      copy: 'Experience a new connection with customers and achieve better business performance with AI Human',
      pos: 'side',
      bg: <>
        <div className='h-full bg-gradient-to-b from-lightgray to-neutral-200 pt-14 flex flex-col justify-between'>
          <div className='mx-auto mt-auto lg:ml-auto lg:mr-12'>
            <div className='relative -translate-y-0 group'>
              <img className='relative drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] w-40 lg:w-80 ' src='/images/img_kiosk.png'/>
              <div
                className='absolute overflow-hidden h-auto w-[87%] top-[10px] left-[10px] lg:top-[19px] lg:left-[20px]'>
                  <img className='w-full h-full transition-all ease-in-out' src='/images/img_screen4.png'/>
              </div>
            </div>
          </div>
        </div>
      </>,
      href: 'https://human-ai-m3.maum.ai/',
      hrefMsg: 'Visit',
      darkMode: false,
    },
    {
      name: 'Maum.ai',
      copy: 'Participated as a frontend developer in the maum.ai website renewal',
      pos: 'center',
      bg: <>
        <div className='h-full bg-gradient-to-b from-lightgray to-neutral-200 pt-16 flex flex-col justify-between'>
          <Icon src='/images/img_maumai_symbol.png'/>
          <div className='mx-auto'>
            <div className='relative -translate-y-0 md:-left-20'>
              <img className='relative h-64 md:h-72 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]'
                   src='/images/img_imac.png'/>
              <div className='absolute top-[9px] left-2.5 h-[83%] w-[96%] overflow-hidden'>
                <img className='w-full h-full' src='/images/img_screen3.png'/>
              </div>
            </div>
            <div className='absolute bottom-0 -translate-y-0 w-[380px] max-md:hidden'>
              <img className='relative left-36 -bottom-4' src='/images/img_screen1.png'/>
            </div>
          </div>
        </div>
      </>,
      href: 'https://maum.ai/',
      hrefMsg: 'Visit',
      darkMode: false
    },
  ];

  return (
    <>
      <main>
        <TopSection>
          <Headline>yeji hwang</Headline>
          <Copy>
          Track progress, stay motivated, and share insights. It’s not just about the destination—it is about the process of continuous learning and growth.
          </Copy>
        </TopSection>

        <Section>
          <SectionHeadline className="horizontal-pad">
            <strong>Projects.</strong>
          </SectionHeadline>

          <Gallery wide>
            {projectList.map((prop, index) => (
              <WideTile key={`project_${index}`} {...prop} />
            ))}
          </Gallery>
        </Section>

        <Section className='bg-lightgray'>
          <SectionHeadline className="horizontal-pad">
            <strong>JavaScript.</strong> from basic to advanced
          </SectionHeadline>

          <Gallery wide>
            {jsTileList.map((prop, index) => (
              <Tile key={index} logo={<IoLogoJavascript className='text-lg lg:text-3xl'/>} {...prop} />
            ))}
          </Gallery>
        </Section>

        <Section className='bg-lightgray'>
          <SectionHeadline className="horizontal-pad">
            <strong>React.</strong> deep dive
          </SectionHeadline>

          <Gallery wide>
            {reactTileList.map((prop, index) => (
              <Tile key={index} logo={<IoLogoReact className='text-lg lg:text-3xl'/>} {...prop} />
            ))}
          </Gallery>
        </Section>

        <Section className='bg-lightgray'>
          <SectionHeadline className="horizontal-pad">
            <strong>Next.js.</strong> 13
          </SectionHeadline>

          <Gallery wide>
            {nextTileList.map((prop, index) => (
              <Tile key={index} logo={<SiNextdotjs className='text-lg lg:text-3xl text-black'/>} {...prop} />
            ))}
          </Gallery>
        </Section>

        <Section className='bg-lightgray'>
          <SectionHeadline className="horizontal-pad">
            <strong>Data Structure & Algorithm.</strong> coding test preparation
          </SectionHeadline>

          <Gallery wide>
            {dsaTileList.map((prop, index) => (
              <Tile key={index} logo={<SiThealgorithms className='text-lg lg:text-3xl text-black'/>} {...prop} />
            ))}
          </Gallery>
        </Section>

        {/* footer */}
        <section
          className="horizontal-pad flex flex-row items-center justify-between py-5">
            <div className='flex flex-row items-center justify-start gap-x-6 font-firacode'>
              <Link href='https://github.com/y6hwang/yeji-blog' rel="noopener noreferrer" target="_blank" >
                <div className='flex flex-row items-center gap-2 underline'><FaGithub />Github</div>
              </Link>
              <Link href='/cv.pdf' rel="noopener noreferrer" target="_blank" >
                <div className='flex flex-row items-center gap-2 underline'><IoIosDocument />Resume</div>
              </Link>
            </div>
            <span className='font-firacode'>yeji hwang</span>
        </section>
      </main>
    </>
  )
}

export default MainPage;


const Section = ({
                   className,
                   children,
                 }: {
  className?: string;
  children: ReactNode;
}) => (
  <section
    className={`pt-14 sm:pt-16 lg:pt-20 ${className}`}
  >
    {children}
  </section>
);
