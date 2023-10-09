import { useLoaderData, useParams } from "react-router-dom";
import ShowEvent from "./ShowEvent";

const Events = () => {
    
    const {id}=useParams();
    const datas=useLoaderData();
    const data=datas.find(data=>data.id==id)
    return (

        
        <>
        <div className="relative">
            <div className="pt-24 h-24 bg-[#001233]">
            
            </div>
        </div>
        <div>
            <ShowEvent data={data}></ShowEvent>
        </div>

        </>
    );
};

export default Events;