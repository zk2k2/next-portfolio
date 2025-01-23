import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const Modal = ({ isOpen, message, onClose }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimateModal(true), 10);
    } else {
      setAnimateModal(false);
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed self-center place-self-center inset-0 bg-gray-600 w-screen h-screen bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
        animateModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg text-center space-y-4 transform transition-transform duration-300 ${
          animateModal ? "scale-100" : "scale-95"
        }`}
      >
        <p className="text-xl font-medium text-black">{message}</p>
        <button
          onClick={onClose}
          className="bg-light-blue text-white py-2 px-4 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
