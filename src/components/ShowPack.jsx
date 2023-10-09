/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import swal from 'sweetalert';

const ShowPack = ({pack}) => {

    const {pid,name,packprice,longDescription}=pack;

    const buttonClick = () => {
        const addedDataArray = [];
    
        const Items = JSON.parse(localStorage.getItem("item"));
        if (!Items) {
          addedDataArray.push(pack);
          localStorage.setItem("item", JSON.stringify(addedDataArray));
          swal("Congratulations", "Your Package is added!!", "success");
        } else {
          const isExits = Items.find((pack) => pack.pid === pid);
          if (!isExits) {
            addedDataArray.push(...Items, pack);
            localStorage.setItem("item", JSON.stringify(addedDataArray));
            swal("Congratulations", "Your Package is added!!", "success");
          } else {
            swal("Sorry", "You can't add the same package without paying the first", "error");
          }
        }
      };


    return (
        <div>
            <div className="card w-80 h-[430px] bg-base-100 shadow-xl">
  <div className="card-body ">
    <h2 className="text-center font-bold text-5xl">{packprice}$</h2>
    <p className="text-xl text-center font-bold text-[#fe5000]">{name}</p>
    <p className="text-sm">{longDescription}</p>
    <div className="card-actions justify-center">
      <button onClick={buttonClick} className="w-full text-[#efe0ca]  hover:bg-[#fe5000]  btn bg-[#001233]">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowPack;