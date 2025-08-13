"use client";
import Image from 'next/image';
import { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

export default function SuccessModal({ isOpen, onClose, userName }: SuccessModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur background overlay */}
      <div 
        className="absolute inset-0  bg-opacity- backdrop-blur-3xl"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative z-10 bg-gradient-to-br from-purple-50 via-orange-50 to-purple-300 rounded-3xl p-12 mx-4 max-w-xl w-full shadow-2xl transform transition-all">
        <div className="text-center">
          {/* Success Icon */}
       
          
          {/* Title */}
          <h3 className="text-4xl font-bold text-[#212121] mb-4">
            🎉 Yippee! You just crowned [{userName}]!
          </h3>
          
          {/* Message */}
          <p className="text-[#616161] text-2xl my-6 ">
            Want to keep the vibes going? Download Crowned to crown someone else — or even yourself!
          </p>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="cursor-pointer w-full bg-gradient-to-r from-[#8459AB] to-[#583A73] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200"
          >
            Download App
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="cursor-pointer text-[#212121] hover:text-[#583A73] transition-colors duration-200 absolute top-4 right-4 p-2"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
          
        </div>
        <Image src={"/assets/crown.svg"} alt="Golden crown logo" width={100} height={100}
          className='absolute w-[200px] h-[200px] -top-[30%] left-1/2 transform -translate-x-1/2 rotate-[-1 here 0deg]' />
      </div>
    </div>
  );
}