import { twMerge } from 'tailwind-merge';

interface SouHeaderProps {
  className?: string;
  heading: string;
  subheading?: string;
}

export default function SouHeader({ className, heading, subheading }: SouHeaderProps) {
  return (
    <header className={twMerge('mb-4 flex flex-col gap-1 font-brioni font-extrabold', className)}>
      <h2 className="text-4xl leading-none tracking-tight md:text-5xl lg:text-6xl">{heading}</h2>
      {subheading && (
        <h3 className="text-3xl leading-none tracking-tight opacity-50 md:text-4xl lg:text-5xl">
          {subheading}
        </h3>
      )}
    </header>
  );
}
