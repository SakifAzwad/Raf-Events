import { useEffect, useState } from "react";
import ShowMyEvents from "./ShowMyEvents";

const Myevents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("item"));

    if (datas) {
      setData(datas);
    }
  }, []);

  
  return (
    <>
      <div className="relative">
        <div className="pt-24 h-24 bg-[#001233]"></div>
      </div>

      <div className="h-full bg-[#001233]">
        <div className=" bg-[#efe0ca] w-4/5 mx-auto  rounded-2xl lg:p-12">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:ml-12 ml-3 pt-16 gap-4">
            {data.map((dat) => (
              <ShowMyEvents key={dat.pid} dat={dat}></ShowMyEvents>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Myevents;
