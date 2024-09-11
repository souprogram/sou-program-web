import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

interface EmailSentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
}

export default function EmailSentSuccessModal({
  isOpen,
  onClose,
  children,
  className,
}: EmailSentSuccessModalProps) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className={twMerge(
        'fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-black text-white',
        className,
      )}
    >
      {children}
    </div>,
    document.getElementById('modal-root')!,
  );
}
