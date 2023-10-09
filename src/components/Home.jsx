import Data from "./Data";
import Member from "./Member";
import useGetData from "./useGetData";
import useMemberData from "./useMemberData";

const Home = () => {
    
    const [datas]=useGetData();
    const [members]=useMemberData();
    

    return (
        <>
        <div className="relative">
            <img className="w-full h-[700px] brightness-50" src="/public/restaurant-hall-with-tables-decorated-with-tall-vases-with-roses.jpg" alt="" />
        </div>
        <div className="bg-[#f4ede2]">
            <h1 className="text-center text-5xl font-bold text-[#fe5000] pt-12">Our Services</h1>
        </div>
        <div>
        <Data datas={datas}></Data>
        </div>
        <div className="bg-[#f4ede2]">
            <h1 className="text-center text-5xl font-bold text-[#fe5000] pt-4">Meet Our Team</h1>
        </div>
        <div>
            <Member members={members}></Member>
        </div>
        </>
        
    );
};

export default Home;