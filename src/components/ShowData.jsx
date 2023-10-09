/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowData = ({data}) => {
    const {id,event,img,homedesc,startprice}=data;
    return (
        <div>
            <div data-aos="flip-up" className="card lg:card-side bg-[#001233] h-96 md:h-72 shadow-xl">
  <figure><img className="h-full w-full" src={img}/></figure>
  <div className="card-body md:w-11/12">
    <h2 className="card-title text-[#efe0ca] font-extraboldbold text-lg">{event}</h2>
    <p className="text-xs text-[#efe0ca]" >{homedesc}</p>
    <p className="text-lg text-[#efe0ca]">Starting at just <span className="text-[#fe5000]">{startprice}$</span></p>
    <div className="card-actions">
      <Link to={`/events/${id}`}><button  className="btn w-full bg-[#efe0ca]  hover:bg-[#fe5000] hover:text-[#efe0ca]">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowData;