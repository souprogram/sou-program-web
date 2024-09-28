import { HiArrowLeft } from 'react-icons/hi';
import { Navigate, useLocation } from 'react-router-dom';
import { TransparentLinkButton } from '../components/ui/LinkButton';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

interface IThankYouStateProps {
  isSubmitted: boolean;
}

const fallbackState: IThankYouStateProps = {
  isSubmitted: false,
};

export const ThankYouPage = () => {
  const location = useLocation();

  const state = (location.state ?? fallbackState) as IThankYouStateProps;

  if (!state.isSubmitted) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-black text-center font-poppins text-gray-200">
      <div className="absolute flex size-full items-center justify-center opacity-5">
        <img src={SPLogoTransparent} alt="Sou program logo" height={720} width={720} />
      </div>
      <div className="z-10 flex h-full max-w-screen-sm flex-col items-center justify-center gap-6 p-4">
        <h1 className="font-brioni text-4xl md:text-5xl">Hvala na prijavi!</h1>
        <p>
          Uskoro ćete primiti e-mail s dodatnim informacijama i detaljima o programu. Zahvaljujemo
          na Vašem interesu!
        </p>
        <TransparentLinkButton to="/" icon={<HiArrowLeft />} label="Nazad na početnu stranicu" />
      </div>
    </section>
  );
};
