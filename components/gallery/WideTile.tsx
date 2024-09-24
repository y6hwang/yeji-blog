import {ReactNode, useState} from 'react';
import {FaChevronRight} from 'react-icons/fa6';

export type WideTileProps = {
  name: string;
  copy: string;
  pos?: string;
  href?: string;
  hrefMsg?: string;
  bg: ReactNode;
  darkMode?: boolean;
  flip?: () => void,
  isBack?: boolean,
  backTile?: ReactNode;
};

export const WideTile = ({name, copy, pos, href, hrefMsg, bg, darkMode, flip, isBack, backTile}: WideTileProps) => {

  return (
    <li
      className={`relative flex w-[var(--wide-tile-width)] snap-start flex-col items-center ${pos ? 'justify-start' : 'justify-end'} overflow-hidden rounded-3xl px-[20px] ${pos ? pos == 'side' ? 'px-8 py-32 max-lg:py-20' : 'py-28 max-md:py-32' : 'py-10'}`}>
        <div className={`absolute bottom-0 left-0 right-0 top-0 ${isBack ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-500 z-50`}>
          {backTile}
        </div>
      {/*{flip && isBack &&*/}
      {/*  <>*/}
      {/*    <div className="absolute bottom-0 left-0 right-0 top-0">*/}
      {/*      {backTile}*/}
      {/*    </div>*/}
      {/*  </>*/}
      {/*}*/}
        <div>
          <div className="absolute bottom-0 left-0 right-0 top-0">{bg}</div>
          <div
            className={`relative z-10 flex flex-col items-center ${pos === 'side' ? 'lg:mr-auto lg:items-start lg:w-7/12' : ''}`}>
            <h2
              className={`text-[32px] font-semibold tracking-[0] ${!darkMode ? 'text-primary' : 'text-[rgb(245,245,247)]'} sm:text-[40px] md:text-[48px] lg:text-[60px] max-md:text-center`}>
              {name}
            </h2>
            <p
              className={`mt-[10px] max-w-[265px] text-[14px] font-normal tracking-[0em] ${!darkMode ? 'text-primary' : 'text-[rgb(245,245,247)]'} max-lg:max-w-[90%] lg:max-w-full whitespace-pre-wrap lg:text-[18px] max-lg:text-center`}>
              {copy}
            </p>
            {href !== undefined &&
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className="mt-[20px] flex items-center gap-[2px] text-linkblue text-[14px] font-normal tracking-[0] hover:underline lg:text-[18px]"
              >
                {hrefMsg !== undefined ? hrefMsg : 'Open'}
                <FaChevronRight className="h-[10px] w-[10px]"/>
              </a>
            }
          </div>
        </div>
    </li>
  );
}
