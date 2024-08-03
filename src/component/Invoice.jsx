import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import Items from "./Items";
import {ItemContext} from "../context/ItemContext"; 

const Invoice = () => {

  const { items, setItems } = useContext(ItemContext); 
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);
  const [billedTo, setBilledTo]= useState('');
  const [ino, setIno]=useState(1);
  const [adress, setAdress]= useState(''); 
  const [date, setDate] = useState('');
  const [global, setGlobal] = useState({}); 


  useEffect(()=>{
    const today = new Date().toISOString().split('T')[0]; 
    setDate(today); 
  },[])

  const submitForm = (e) => {
    e.preventDefault();
    if(!name|| !quantity ||!price||!billedTo||!adress )
    {
      toast.error("Please fill all the field ")
      return; 
    }

    if(quantity<0 ||price<0)
    {
      toast.error("Please fill fields correctly ")
      return; 
    }
   
    const newGlob = { ino:ino,  billedTo:billedTo, adress:adress, date:date };
    setGlobal(newGlob); 

    const newItem = {
      id:parseInt(id),
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      total: parseInt(quantity) * parseFloat(price)
    };

    setItems([...items, newItem]);
    toast.success("item added");
    setId(id+1); 
    setIno(ino+1);
    setName(''); 
    setQuantity(''); 
    setPrice('');
    
  };


 
  const inputStyle =
    "bg-gray-100 focus:bg-white rounded-sm border-gray-100 border-2 w-full rounded-md px-2 py-1 placeholder:text-slate-600 focus:outline-none focus:border-gray-400";

  return (
    <div className="grid grid-cols-1 md:grids-cols-2 border-2 gap-1 mx-2 my-4 p-2 md:grid-cols-50/50 lg:grid-cols-60/40  rounded-md ">
      <div className="w-full border-gray-300 border-b md:border-r md:border-b-0 mx-auto px-4 lg:pr-72 xl:pr-96 ">
        <form onSubmit={submitForm} className="flex flex-col justify-center">
          <div className="flex flex-col">
          <div className=" pb-4 border-b border-gray-300 flex flex-row md:items-start items-center justify-between">
            <div className="mb-2">
              <label
                htmlFor="date"
                className="block mb-2 px-0.5 text-black text-md font-bold text-left "
              >
                date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className=" bg-gray-100 max-w-32 focus:outline-none focus:border-gray-500 
                rounded-sm px-2 py-2 h-8"
               
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="ino"
                className="block mb-2 px-0.5 text-black text-md font-bold text-left"
              >
                invoice no
              </label>
              <input
                type="number"
                value={ino}
                onChange={(e) => setIno(e.target.value)}
                className="bg-gray-100 max-w-20 focus:outline-none focus:border-gray-500 
               rounded-sm px-2 py-2 h-8"
              />
            </div>
          </div>
          
          <div className=" pb-4 border-b border-gray-300 flex flex-col items-start justify-between">
            <div className="mb-2">
              <label
                htmlFor="billTo"
                className="block my-2 px-0.5 text-black text-md font-bold text-left "
              >
                bill to
              </label>
              <input
                type="text"
                value={billedTo}
                onChange={(e) => setBilledTo(e.target.value)}
                className=" bg-gray-100 max-w-36 focus:outline-none focus:border-gray-500 
                rounded-sm px-2 py-2 h-8"
               
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="ino"
                className="block my-2 px-0.5 text-black text-md font-bold text-left"
              >
                adress
              </label>
              <input
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                className="bg-gray-100 max-w-36 focus:outline-none focus:border-gray-500 
               rounded-sm px-2 py-2 h-8"
              />
            </div>
          </div>
          </div>
        
          


          <div className="mb-4">
            <label
              htmlFor="item"
              className="block my-2 px-0.5 text-black text-md font-bold text-left"
            >
              item
            </label>

            <input
              type="text"
              placeholder="item name"
              className={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
              
            />
          </div>

          <div className="mb-4 ">
            <label
              htmlFor="quantity"
              className="block my-2 px-0.5 text-black text-md font-bold text-left"
            >
              quantity
            </label>

            <input
              type="number"
              placeholder="quantity"
              className={inputStyle}
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block my-2 px-0.5 text-black text-md font-bold text-left"
            >
              price
            </label>
            <span className="absolute   inline-block text-center   ">
              <span className=" relative top-[6px] rounded-full border border-gray-600 w-6 h-6 left-1 text-gray-600  inline-block ">
              
                ₹
              </span>
            </span>

            <input
              type="number"
              placeholder="1"
              className={`${inputStyle} pl-8`}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-start">
              <button
                type="submit"
                className="bg-indigo-500 px-6 py-2 rounded-sm border-none 
                     text-white hover:bg-indigo-600 active:bg-indigo-600
                      hover:shadow-md font-bold focus:outline-none"
              >
                add item
              </button>
            </div>
          </div>
        </form>
       
      </div>
      <div className="w-full  mx-auto px-4">
       
          <div className="text-gray-500">
            <Items global={global} />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
