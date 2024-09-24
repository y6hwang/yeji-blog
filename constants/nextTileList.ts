import {TileProps} from '@/components/gallery/Tile'

export const nextTileList: TileProps[] = [
  {
    id: 1,
    name: 'App Directory',
    description:
      'Introduce a new approach to routing and layout management, allowing for directory-based routing and support for nested routes, layouts, and server components.',
    concepts: 'App Router',
    href: '/next/app',
    content: ``,
  },
  {
    id: 2,
    name: 'Server Component',
    description:
      'React Server Components render individual components on the server and send them as HTML fragments to the client for efficient loading and interaction.',
    concepts: 'fetch, Static/Dynamic Rendering, cache, mutating, revalidating',
    href: '/next/component',
    content: ``,
  },
  {
    id: 3,
    name: 'Turbopack',
    description:
      'Turbopack is a next-generation bundler for JavaScript and TypeScript applications, designed to be significantly faster than existing bundlers like Webpack.',
    href: '/next/turbo',
    content: ``,
  },
  {
    id: 4,
    name: 'Server Action',
    description:
      'Next.js Server Actions allow server-side logic to be executed directly from the client, enabling seamless data updates and interactions while preserving a clear separation between client and server code.',
    concepts: 'action, submit, formAction, startTransition',
    href: '/next/alpha',
    content: ``,
  },
  // {
  //   id: 5,
  //   name: 'Examples',
  //   description:
  //     '',
  //   href: '/next/ex',
  //   content: ``,
  // },
].map((x) => ({
  ...x,
  content: x.content ? { type: 'react', code: x.content } : undefined,
  style: {
    backgroundImage: `linear-gradient(160deg,#e9e9e9 1%,#d4d4d4 51%,#9a9a9a 49%,#707070 99%)`,
  },
}))