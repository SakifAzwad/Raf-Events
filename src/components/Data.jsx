/* eslint-disable react/prop-types */
import ShowData from "./ShowData";


const Data = ({datas}) => {
    return (
        <div className="bg-[#f4ede2]">
            <div className="grid lg:grid-cols-2 grid-cols-1 w-4/5 gap-8 mx-auto py-16">
            {
                datas?.map((data)=>(
                    <ShowData key={data.id} data={data}></ShowData>
                ))
            }
            </div>
        </div>
    );
};

export default Data;