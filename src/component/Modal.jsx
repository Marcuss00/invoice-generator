import  { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div ref={modalRef} className="bg-white p-4 rounded-sm shadow-md max-w-md w-full m-4">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;