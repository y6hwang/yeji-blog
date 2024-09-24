import React, { ReactNode } from "react";
import Image from 'next/image';

const ImageViewer = ({ className, src, caption }: {
  className?: string;
  src: string;
  caption?: string;
}) => (
  <div className={`w-full my-2 ${className}`}>
    <div className='bg-gray-100 p-8 bg-gray-100 rounded-xl border '>
      <img src={src} alt='diagram' className='mx-auto' />
    </div>
    {
      caption?.length &&
      <p className='w-full m-0 py-1 text-teal-700 text-sm text-center'>
        {caption}
      </p>
    }
  </div>

);

export default ImageViewer;