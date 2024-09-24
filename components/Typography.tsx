import {ReactNode} from 'react';
import Sandbox from "./code/sandbox/Sandbox";

import { FaCheckCircle} from "react-icons/fa";

export const TopSection = ({children}: { children: ReactNode }) => (
  <section
    className="horizontal-pad flex flex-col items-start justify-between pt-14 sm:pt-16 md:pt-20 lg:flex-row lg:items-center lg:pt-20">
    {children}
  </section>
);

export const Headline = ({children}: { children: ReactNode }) => (
  <h1 className="mr-8 text-5xl font-semibold text-primary md:text-6xl lg:text-8xl">
    {children}
  </h1>
);

export const Copy = ({children}: { children: ReactNode }) => (
  <p className="mt-4 w-auto max-w-fit text-xl[1.25rem] font-semibold text-primary lg:w-96 lg:text-xl/[1.25rem]">
    {children}
  </p>
);

export const SectionHeadline = ({
                                  className,
                                  children,
                                }: {
  className?: string;
  children: ReactNode;
}) => (
  <h2
    className={`mb-7 text-3xl font-semibold text-coolgray md:mb-9 md:text-4xl lg:mb-10 lg:text-5xl [&>strong]:font-semibold [&>strong]:text-primary ${className}`}
  >
    {children}
  </h2>
);

export const CodeBox = ({className, presetName, code, executeDisabled = false}: {
  className?: string;
  presetName: "js" | "ts" | "html" | "rxjs" | "babel" | "react";
  code: string;
  executeDisabled?: boolean;
}) => (
  <div className='code-box my-4 w-full text-primary font-normal'>
    <Sandbox
      presetName={presetName}
      code={code}
      executeDisabled={executeDisabled}
      refreshDisabled
      logExpanded
    />
  </div>
);


export const CodeBlock = ({className, value}: {
  className?: string;
  value: ReactNode;
}) => (
  <code className={`font-firacode bg-gray-200 px-1 font-normal ${className}`}>
    {value}
  </code>
);

export const Strong = ({className, children}: {
  className?: string;
  children: ReactNode;
}) => (
  <strong className={`text-teal-700 font-semibold ${className}`}>
    {children}
  </strong>
);

export const Check = ({children}: {
  children: ReactNode;
}) => (
  <div className='flex flex-row items-start'>
    <FaCheckCircle className='shrink-0 mt-4 fill-teal-400 mr-4'/>
    <p>{children}</p>
  </div>
);

export const CommandLine = ({className, code} : {
  className?: string;
  code: string;
}) => (
  <p className={`font-firacode bg-gray-200 p-3 font-normal ${className}`}>
    {code}
  </p>

);
