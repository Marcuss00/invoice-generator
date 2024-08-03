import Item from "./Item";
import Spinner from "../icons/Spinner";
import { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";
 import {jsPDF} from "jspdf"
 import { toast } from "react-toastify";
 import 'jspdf-autotable'; 
const Items = ( {global} ) => {

  const [billFrom, setBillFrom] = useState(''); 
  const { items } = useContext(ItemContext);



  const generatePDF = (e) => {
    e.preventDefault();
    if(!billFrom )
    {
      toast.error("fill biller name ")
      return; 
    }


    const doc = new jsPDF();



    doc.setFontSize(15); 
    doc.text(`date: ${global.date.toString()}` ,10, 10); 

    doc.setFontSize(22)
    doc.setTextColor(99,102,241);
    doc.text('INVOICE', 105, 30, { align: 'center' });
    doc.setFontSize(15)
    doc.setTextColor(0);
    doc.text(`invoice-number : ${global.ino.toString()}` ,155, 10); 

    doc.setFontSize(18)
    doc.setTextColor(99,102,241);
    doc.text("billed to: ", 10,42)
    doc.text("bill From: ", 160,42)

    doc.setFontSize(15)
    doc.setTextColor(0);

    doc.text(global.billedTo,12,50 );
    doc.text(global.adress,12,60); 
    doc.text(billFrom, 162,50);



    const tableData = items.map(item=>[
      item.name,
      item.quantity.toString(), 
      `${item.price.toFixed(2)}`, 
      `${(item.quantity*item.price).toFixed(2)}`
    ]);


    doc.autoTable({
      head:[["name", "qty", 'price','total']],
      body:tableData, 
      startY:800,
      styles:{fontsize:12, cellPadding:5},
      columnStyles:{
        0:{cellWidth:60},
        1:{cellWidth:40},
        2:{cellWidth:40},
        3:{cellWidth:40}
      },
      alternateRowStyles:{fillColor:[245,245,245]},
      headStyles:{fillColor:[99,102,241], textColor:[255,255,255], fontStyle:'bold'}
    });
     


    const netTotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

    const finalY = doc.lastAutoTable.finalY || 30; 
    doc.setFontSize(14); 
    doc.text(`Total: ${netTotal}`, 14,finalY + 20); 
    
    doc.save('invoice.pdf');
  };


  return (
    <div className="w-full py-2 ">
      <div className="grid grid-cols-5 gap-4 rounded-t-lg text-white font-bold bg-indigo-500 px-2 py-2">
        <div> name </div>
        <div> qty </div>
        <div> price </div>
        <div> total </div>
        <div> </div>
      </div>

      <div>
       
        { items.length > 0 ?  items.map((item, idx)=>
         <Item item={item} key={idx} />
        ) : (
          <div className="py-10">
            <Spinner size="Extralarge" />
          </div>
        )}
      </div>
      {
        items.length > 0 ? <div className="flex flex-col invoice:flex-row justify-between py-4 invoice:py-2">
        <input
        className="px-6 py-2 bg-gray-100  rounded-sm border-none text-slate-400  font-2xl focus:outline-none mt-4 "
         type="text"
         value={billFrom}
         onChange={(e)=>setBillFrom(e.target.value)}
         placeholder="bill from"
         />
        <button
        onClick={generatePDF}
        className="bg-green-500  px-6 py-2 rounded-sm border-none text-white hover:bg-green-600 active:bg-green-600 hover:shadow-md font-bold focus:outline-none mt-4"
      >
        download
      </button> </div> : ''
      }
      
    </div>
  );
};

export default Items;
