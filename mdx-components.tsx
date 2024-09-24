import type { MDXComponents } from "mdx/types";

import Code from "@/components/code/Code";
import { Check } from "@/components/Typography"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: (props) => (
      <div className='p-3'>
        <ul>
          <li className='px-1 text-xl font-firacode font-normal'>{props.children}</li>
        </ul>
      </div>
    ),
    // em: (props) => (
    //   <Check>{props.children}</Check>
    // ),
    code: Code,
    strong: (props) => (
      <strong className={`text-teal-700 font-semibold`}>
        {props.children}
      </strong>
    )
  };
}