import {TileProps} from '@/components/gallery/Tile';

export const jsTileList: TileProps[] = [
  {
    id: 1,
    name: 'Data Type',
    description:
      'Different types in JS, how they are stored and compared.',
    concepts: 'type, data comparison, type casting',
    href: '/js/type',
    content: `let foo;
console.log(typeof foo);
function bar(hello) {
    return hello
}
console.log(typeof bar())`,
  },
  {
    id: 2,
    name: 'Function',
    description:
      'If you build a solid foundation in functions, it will greatly help you understand the JavaScript ecosystem.',
    concepts: 'Arrow function, function types',
    href: '/js/function',
    content: `const sum = (a, b) => {
  return a + b;
};
console.log(sum(10,24));`,
  },
  {
    id: 3,
    name: 'Class',
    description:
      'Understanding classes will help you see why React changed paradigms and will also assist in refactoring older React code.',
    concepts: 'constructor, properties, getter/setter',
    href: '/js/class',
    content: `class Car {
  constructor(name) {
    this.name = name;
  }
}
const myCar = new Car('Tayo');
console.log(myCar.name);`
  },
  {
    id: 4,
    name: 'Closure',
    description:
      'The structure function components, the principles of hooks, and most of techniques in function components rely on closures.',
    concepts: 'global scope, function scope, closure in react',
    href: '/js/closure',
    content: `function add() {
  const a = 10;
  function innerAdd() {console.log(a + 20)};
  innerAdd();
}
add();`,
  },
  {
    id: 5,
    name: 'Async Process',
    description:
      'JavaScript operates in a single-threaded, synchronous manner, but many processes work asynchronously.',
    concepts: 'single thread, event loop, task queue',
    href: '/js/async',
    content: `setTimeout(() => { console.log(2) }, 0);
setTimeout(() => { console.log(3) }, 100);
console.log(1);`,
  },
  {
    id: 6,
    name: 'JS Syntax in React',
    description:
      'JavaScript syntax necessary for a stable React applicationt',
    concepts: 'destructing, Array.prototype',
    href: '/js/react',
    content: `const value = 10;
const result = value % 2 === 0 ? 'even' : 'odd';
console.log(result);`
  },
  {
    id: 7,
    name: 'TypeScript',
    description:
      'Not optional but essential: JavaScript with syntax for types',
    href: '/js/typescript',
  },
].map((x) => ({
  ...x,
  content: x.content ? {type: 'js', code: x.content} : undefined,
  style: {
    backgroundImage: `linear-gradient(180deg,#fcdd31 35%,#fff 0%)`,
  },
}))