import { useEffect, useState } from "react";


const Payment = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
      const datas = JSON.parse(localStorage.getItem("item"));
  
      if (datas) {
        setData(datas);
      }
    }, []);

    var z=0;
    {data.map((dat) => (
        z+=dat.packprice
      ))}

    return (
        <>
      <div className="relative">
        <div className="pt-24 h-24 bg-[#001233]"></div>
      </div>

      <div className=" bg-[#001233]">
        <div className="h-72 bg-[#efe0ca] w-4/5 mx-auto rounded-2xl p-12">
         <h2 className="text-center text-xl lg:text-5xl">Your Total Amount : <span className="font-bold text-[#fe5000]">{z}</span>$</h2>
        </div>
      </div>
    </>
    );
};

export default Payment;