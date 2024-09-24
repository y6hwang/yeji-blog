import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';


/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// export default nextConfig;

const withMDX = createMDX({
  // Add Markdown plugins here, as desired
  options: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
});

export default withMDX(nextConfig)
