import { HiArrowLeft } from 'react-icons/hi';
import Modal from '../Modal';
import SouHeader from '../SouHeader';
import Button from '../ui/Button';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

interface EmailSentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function EmailSentSuccessModal({ isOpen, onClose }: EmailSentSuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative min-h-screen bg-black py-[9vh] text-center font-poppins text-gray-200">
        <div className="opacity-5">
          <img
            src={SPLogoTransparent}
            alt="Sou program logo"
            className="absolute left-[24%] top-[-10%] z-20 h-[45rem] w-[45rem]"
          />
        </div>
        <div className="mx-auto flex min-h-[82vh] max-w-screen-lg flex-col px-8 py-36 sm:px-6 lg:px-8">
          <SouHeader className="text-white" heading="Uspješno ste poslali mail!" />
          <p className="mb-8 leading-relaxed text-gray-400">Naš email: info@souprogram.hr</p>

          <div className="flex justify-center">
            <Button transparent onClick={onClose}>
              <HiArrowLeft />
              Nazad na početnu stranicu
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
