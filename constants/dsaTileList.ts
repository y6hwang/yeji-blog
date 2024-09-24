import { TileProps } from '@/components/gallery/Tile';

export const dsaTileList: TileProps[] = [
  {
    id: 1,
    name: 'Data Structures',
    description:
      '',
    content: 'Array & List, Range Sum, Two Pointers, Sliding Window, Stack & Queue',
    href: '/dsa/structure',
  },
  {
    id: 2,
    name: 'Sorting',
    description:
      '',
    content: 'Bubble, Selection, Insertion, Quick, Merge, Radix',
    href: '/dsa/sort',
  },
  {
    id: 3,
    name: 'Searching',
    description:
      '',
    content: 'Depth-First Search, Breadth-First Search, Binary Search',
    href: '/dsa/search',
  },
  {
    id: 4,
    name: 'Greedy Algorithm',
    description:
      '',
    content: 'Greedy Algorithm',
    href: '/dsa/greedy',
  },
  {
    id: 5,
    name: 'Number Theory',
    description:
      '',
    content: 'Finding Primes, Euler\'s Totient Function, Euclidean Algorithm, Extended Euclidean Algorithm',
    href: '/dsa/number',
  },
  {
    id: 6,
    name: 'Graph',
    description:
      '',
    content: 'Union-Find, Topological Sort, Eijkstra\'s, Bellman-Ford, Floyd-Warshall Algorithm, Minimum Spanning Tree',
    href: '/dsa/graph',
  },
  {
    id: 7,
    name: 'Tree',
    description:
      '',
    content: 'Trie, Binary Tree, Segment Tree, Lowest Common Ancestor (LCA)',
    // href: '/dsa/tree',

  },
  {
    id: 8,
    name: 'Combination',
    description:
      '',
    content: 'Combinations',
    // href: '/dsa/combination',

  },
  {
    id: 9,
    name: 'Dynamic Programming',
    description:
      '',
    content: 'Dynamic Programming',
    // href: '/dsa/dynamic',
  },
  {
    id: 10,
    name: 'Geometry',
    description:
      '',
    content: 'geometry',
    // href: '/dsa/geometry',
  },
  {
    id: 11,
    name: 'Test Preparation',
    description:
      '',
    content: 'Algorithm, Time Complexity, Logical Errors in Code, Debugging',
    // href: '/dsa/test',
  },
].map((x) => ({
  ...x,
  content: x.content ? { type: 'list', list: x.content.split(',') } : undefined,
  style: {
    backgroundImage: `linear-gradient(180deg,#81A263 35%,#fff 0%)`,
  },
}))