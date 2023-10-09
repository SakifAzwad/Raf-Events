/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ShowMyEvents = ({dat}) => {

    console.log(dat);
    const {name,packprice,longDescription}=dat;

    return (
        <div>
        <div className="card w-80 h-96 bg-base-100  shadow-xl">
<div className="card-body ">
<h2 className="text-center font-bold text-5xl">{packprice}$</h2>
<p className="text-xl text-center font-bold text-[#fe5000]">{name}</p>
<p className="text-sm">{longDescription}</p>
<div className="card-actions justify-center">

</div>
</div>
</div>
    </div>
);
};

export default ShowMyEvents;