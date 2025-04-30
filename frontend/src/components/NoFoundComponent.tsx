import { HiArrowLeft } from 'react-icons/hi';
import { TransparentLinkButton } from './ui/LinkButton';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

export default function NoFoundComponent() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center bg-black text-center text-gray-200">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img
          src={SPLogoTransparent}
          alt="Sou program logo"
          className="size-[40rem]"
          width="500"
          height="500"
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-6 px-8 py-36 sm:px-6 lg:px-8">
        <h3 className="font-brioni text-5xl text-white">404 Not found</h3>
        <div className="flex justify-center">
          <TransparentLinkButton to="/" icon={<HiArrowLeft />} label="Nazad na početnu stranicu" />
        </div>
      </div>
    </div>
  );
}
