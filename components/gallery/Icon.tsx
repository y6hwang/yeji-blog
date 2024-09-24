export type IconProps = {
  src: string;
};

export const Icon = ({src}: IconProps) => (
  <img className='h-14 mx-auto bg-white p-2 rounded-xl shadow-md' src={src}/>
);
