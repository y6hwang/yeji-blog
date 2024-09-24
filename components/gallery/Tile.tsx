import Link from 'next/link';
import {CSSProperties, ReactNode} from 'react';

import { PiCheckCircle } from "react-icons/pi";

import Sandbox from '@/components/code/sandbox/Sandbox';


export type TileProps = {
  id: number;
  logo?: ReactNode;
  name: string;
  description: string;
  style?: CSSProperties;
  concepts?: string;
  href?: string;
  content?:
    | {
    type: 'js' | 'html' | 'react';
    code: string;
  }
    | {
    type: 'custom';
    children: ReactNode;
  } | {
    type: 'list';
    list: string[];
  }
};

export const Tile = (
  {
    id,
    logo,
    name,
    description,
    concepts,
    href,
    content,
    style,
  }: TileProps) => {
  let textColor = 'text-primary';
  if (style?.backgroundColor && isColorDark(style.backgroundColor)) {
    textColor = 'text-white';
  }

  return (
    <TileContainer>
      <div
        className={`bg-white z-10 flex w-full flex-col items-start p-5 pr-6 pt-6 md:p-6 md:pt-7 ${textColor}`}
        style={style}
      >
        <div className='basis-[35%] flex flex-col items-start gap-2.5'>
          <TileTitle logo={logo}>{name}</TileTitle>
          <p className="text-sm font-normal lg:text-base">
            {description}
          </p>
          {href !== undefined && (
            <Link
              href={href}
              className="flex cursor-pointer items-center text-sm font-normal hover:underline lg:text-base"
            >
              <button className={`bg-primary rounded-2xl py-1 px-3 text-sm text-lightgray`}>Detail</button>
            </Link>
          )}
        </div>
        

        <div className="mb-auto w-full text-primary">
          {content?.type === 'js' && (
            <Sandbox
              presetName="js"
              code={content.code}
              refreshDisabled
              logExpanded
            />
          )}
          {content?.type === 'html' && (
            <Sandbox presetName="html" code={content.code}/>
          )}
          {content?.type === 'react' && (
            <Sandbox presetName="react" code={content.code} refreshDisabled/>
          )}
          {content?.type === 'custom' && content?.children}
          {content?.type === 'list' && (
            <ul className='py-4 list-inside'>
              {content.list.map((item, index) => (
                <li key={`list_${index}`} className='px-4 py-2 border-b flex flex-row items-center gap-4'>
                  <PiCheckCircle className='text-coolgray text-xl md:text-2xl'/>
                  <span className='font-firacode truncate text-sm md:text-base'>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {concepts !== undefined && (
          <div className="text-sm font-normal">
            <h4 className="font-semibold">Concepts</h4>
            <p>{concepts}</p>
          </div>
        )}
      </div>
    </TileContainer>
  );
};

export const TileContainer = ({children}: { children: ReactNode }) => (
  <li className="relative flex w-[var(--tile-width)] snap-start overflow-clip rounded-3xl">
    {children}
  </li>
);

export const TileTitle = ({logo, children}: { logo: ReactNode, children: ReactNode }) => (
  <div className='flex flex-row items-center gap-1.5 lg:gap-2.5'>
    <div className='bg-white p-1 rounded-lg shadow-xl'>
      {logo}
    </div>
    <h3 className="block text-xl font-semibold md:text-2xl lg:text-[26px]">
      {children}
    </h3>
  </div>
);

const isColorDark = (hex: string) => {
  hex = hex.substring(1);

  const rgb = parseInt(hex, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma < 128;
};
