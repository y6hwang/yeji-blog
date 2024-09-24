'use client';

import React, { ReactElement, useState, useEffect } from "react";
import './index.css';



export const PortfolioBackground: ReactElement | null = (
  <div className='bg bg-portfolio'>
    {/* <div className='w-3/5 absolute top-28 left-32'>
      <img src='/images/img_review.svg' />
    </div> */}

    {/* <div className='w-3/5 absolute top-32 left-48'>
      <img src='/images/img_typing.svg' />
    </div> */}

    <div className='w-3/5 absolute top-32 left-32 group'>
      <img src='/images/img_thinking.svg'/>
    </div>

    {/* <div className='w-3/5 absolute top-28 right-28'>
      <img src='/images/img_inspection.svg' />
    </div>  */}

    {/* <div className='w-3/5 absolute top-8 left-40'>
      <img src='/images/img_proud.svg' />
    </div> */}
  </div>
);

