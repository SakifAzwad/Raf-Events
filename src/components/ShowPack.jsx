/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ShowPack = ({pack}) => {

    const {name,packprice,longDescription}=pack;
    return (
        <div>
            <div className="card w-80 h-[430px] bg-base-100 shadow-xl">
  <div className="card-body ">
    <h2 className="text-center font-bold text-5xl">{packprice}$</h2>
    <p className="text-xl text-center font-bold text-[#fe5000]">{name}</p>
    <p className="text-sm">{longDescription}</p>
    <div className="card-actions justify-center">
      <button className="w-full text-[#efe0ca]  hover:bg-[#fe5000]  btn bg-[#001233]">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowPack;