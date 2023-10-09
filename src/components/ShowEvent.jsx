/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ShowPack from "./ShowPack";

const ShowEvent = ({ data }) => {
  const { event, img, packages,eventdesc } = data;

  return (
    <div className="bg-[#001233]">
      <div className=" bg-[#efe0ca] w-4/5 mx-auto rounded-2xl p-12">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
            className="h-96 w-full"
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-3xl">{event}</h2>
            <p className="">{eventdesc}</p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 ml-12 pt-16">
      {
        packages?.map((pack)=>(
            <ShowPack key={pack.id}  pack={pack}></ShowPack>
        ))
      }
      </div>
      </div>
      
    </div>
  );
};

export default ShowEvent;
