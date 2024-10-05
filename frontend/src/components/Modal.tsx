import { useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className }: ModalProps) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  useLayoutEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className={twMerge(
        'fixed inset-0 z-40 flex min-h-screen flex-col items-center justify-center bg-black text-white',
        className,
      )}
    >
      {children}
    </div>,
    document.getElementById('modal-root')!,
  );
}
