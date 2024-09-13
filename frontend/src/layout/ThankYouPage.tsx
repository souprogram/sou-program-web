import { HiArrowLeft } from 'react-icons/hi';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

export const ThankYouPage = () => {
  const location = useLocation();

  const state = location.state as { isSubmitted: boolean } | undefined;

  if (!state?.isSubmitted) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="relative min-h-screen bg-black py-[9vh] text-center font-poppins text-gray-200">
      <div className="opacity-5">
        <img
          src={SPLogoTransparent}
          alt="Sou program logo"
          className="absolute left-[24%] top-[-10%] z-20 h-[45rem] w-[45rem]"
        />
      </div>
      <div className="mx-auto flex min-h-[82vh] max-w-screen-lg flex-col px-8 py-36 sm:px-6 lg:px-8">
        <h1 className="font-brioni text-4xl">Hvala na prijavi za radionicu robotike!</h1>
        <p className="mb-1 mt-8">
          Uskoro ćete primiti e-mail s dodatnim informacijama i detaljima o programu.
        </p>
        <p>Zahvaljujemo na Vašem interesu!</p>
        <Link to="/" className="mt-6 text-white">
          <Button transparent>
            <HiArrowLeft />
            Nazad na početnu stranicu
          </Button>
        </Link>
      </div>
    </section>
  );
};
