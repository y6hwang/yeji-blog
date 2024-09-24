import {TileProps} from '@/components/gallery/Tile'

export const reactTileList: TileProps[] = [
  {
    id: 1,
    name: 'Key Concepts',
    description:
      'Introduce key concepts that make up React and understand how these features work based on JavaScript.',
    concepts: 'JSX, Components, DOM, Rendering, Memoization',
    href: '/react/concept',
    content: `const Component = (
  <div className="hello">
    <input type="text" value="hello" />
  </div>
)`,
  },
  {
    id: 2,
    name: 'Hooks',
    description:
      'Function components use hooks to perform managing state, replacing lifecycle methods of class components, and many more.',
    concepts: 'useState, useEffect, useMemo, useCallback, useRef, useContext, useReducer',
    href: '/react/hooks',
    content: `function Component() {
  useEffect(() => {
    // do something
  }, [props, state]);
}`,
  },
  {
    id: 3,
    name: 'Server-side Rendering',
    description:
      'To create a web application that provides a good user experience for many users, it is necessary to understand both SPA and SSR.',
    concepts: 'Single Page Application, renderToString, renderToStaticMarkup, hydrate, Next.js',
    href: '/react/ssr',
    content: `const result = 
  ReactDOMServer.renderToString(
    React.createElemnt(
      'div', 
      { id: 'root' }, 
      <SampleComponent />
    ),
  );`,
  },
  {
    id: 4,
    name: 'State Management',
    description:
      'Introduce the necessity of state management libraries and how a recently popular state management library works.',
    concepts: 'Flux, Redux, SWR, React Query, Recoil',
    href: '/react/state',
    content: `const counter = atom({ key: 'count', default: 0 });
const todoList = useRecoilValue(counter);`,
  },
  {
    id: 5,
    name: 'Environment Setup',
    description:
      'Writing code is important, but equally important is creating an environment that enables writing good code.',
    concepts: 'ESLint, React Testing Library, config, Deploy, GitHub, Docker',
    href: '/react/env',
    content: ``,
  },
].map((x) => ({
  ...x,
  content: x.content ? { type: 'react', code: x.content } : undefined,
  style: {
    backgroundImage: `linear-gradient(180deg, #61a0bc 35%, #fff 0%)`,
  },
}))