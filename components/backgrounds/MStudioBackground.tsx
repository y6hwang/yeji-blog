'use client';

import React, { ReactElement } from "react";
import './index.css';

export const MStudioBackground: ReactElement | null = (
  <div className='bg bg-mstudio'>
    <div className='squares1'>
      <img className='w-full' src='/svg/square1.svg' alt='square'/>
      <img className='w-5/6' src='/svg/square1.svg' alt='square'/>
      <img className='w-4/6' src='/svg/square1.svg' alt='square'/>
      <img className='w-3/6' src='/svg/square1.svg' alt='square'/>
      <img className='w-2/6' src='/svg/square1.svg' alt='square'/>
      <img className='w-1/6' src='/svg/square1.svg' alt='square'/>
    </div>
    <div className='squares2'>
      <img className='w-full' src='/svg/square2.svg' alt='square'/>
      <img className='w-5/6' src='/svg/square2.svg' alt='square'/>
      <img className='w-4/6' src='/svg/square2.svg' alt='square'/>
      <img className='w-3/6' src='/svg/square2.svg' alt='square'/>
      <img className='w-2/6' src='/svg/square2.svg' alt='square'/>
      <img className='w-1/6' src='/svg/square2.svg' alt='square'/>
    </div>
    <img className='dots1' src='/svg/dot.svg' alt='square'/>
    <img className='dots2' src='/svg/dot.svg' alt='square'/>
    <span className='obj'/>
    <span className='obj'/>
    <span className='obj'/>

  </div>
);