import { HiArrowLeft } from 'react-icons/hi';
import Modal from '../Modal';
import { TransparentLinkButton } from '../ui/LinkButton';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';
import SouHeader from '../SouHeader';

interface EventSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const fallbackMessage =
  'Uskoro ćete primiti e-mail s dodatnim informacijama i detaljima. Zahvaljujemo na Vašem interesu!';

export default function EventSuccessModal({
  isOpen,
  onClose,
  title = 'Hvala na prijavi!',
  message = fallbackMessage,
}: EventSuccessModalProps) {
  return (
    // <Modal isOpen={isOpen} onClose={onClose}>
    //   <div className="relative min-h-screen bg-black py-[9vh] text-center font-poppins text-gray-200">
    //     <div className="opacity-5">
    //       <img
    //         src={SPLogoTransparent}
    //         alt="Sou program logo"
    //         className="absolute left-[24%] top-[-10%] z-20 h-[45rem] w-[45rem]"
    //       />
    //     </div>
    //     <div className="mx-auto flex min-h-[82vh] max-w-screen-lg flex-col px-8 py-36 sm:px-6 lg:px-8">
    //       <SouHeader className="text-white" heading={title} />
    //       {message && <p className="mb-8 leading-relaxed text-gray-400">{message}</p>}

    //       <TransparentLinkButton to="/" icon={<HiArrowLeft />} label="Nazad na početnu stranicu" />
    //     </div>
    //   </div>
    // </Modal>

    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative min-h-screen bg-black py-[9vh] text-center font-poppins text-gray-200">
        <div className="opacity-5">
          <img
            src={SPLogoTransparent}
            alt="Sou program logo"
            className="absolute left-[24%] top-[-10%] h-[45rem] w-[45rem]"
          />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-screen-lg flex-col px-8 py-36 sm:px-6 lg:px-8">
          <SouHeader className="text-white" heading={title} />
          {message && <p className="mb-8 leading-relaxed text-gray-400">{message}</p>}

          <div className="flex justify-center">
            <TransparentLinkButton
              to="/"
              icon={<HiArrowLeft />}
              label="Nazad na početnu stranicu"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
