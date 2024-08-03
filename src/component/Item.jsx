import DeleteButton from "./DeleteButton";
import { useState } from "react";
import Modal from "./Modal";
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';


const Item = ({ item }) => {


  const [open, setOpen] = useState(false);
  const { setItems } = useContext(ItemContext); 

  const handleDelete = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="grid transform transition-transform duration-200 hover:bg-gray-200 hover:scale-105  relative antialiased items-center subpixel-antialiased grid-cols-5 gap-4 px-2 py-1 bg-gray-50">
      <div className="flex flex-row items-center">
        <div className="mr-1">
          {item.name.length > 10
            ? item.name.substring(0, 3) + "..."
            :  item.name}
        </div>
        {item.name.length > 10 && (
          <button
            onClick={handleToggleModal}
            className="text-indigo-500 text-sm font-bold"
          >
            more
          </button>
        )}

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <div className="px-2">
            <div className="text-lg font-bold mb-2 ">Item details </div>
            <p className="text-slate-500 break-words overflow-wrap">
              {item.name}
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-1 bg-indigo-500 mb-2 text-white font-bold rounded-sm"
            >
              close
            </button>
          </div>
        </Modal>
      </div>
      <div>{item.quantity}</div>
      <div>₹{item.price}</div>
      <div>₹{item.total}</div>   
     <div onClick={()=>handleDelete(item.id)}><DeleteButton /></div>
      
    </div>
  );
};

export default Item;
