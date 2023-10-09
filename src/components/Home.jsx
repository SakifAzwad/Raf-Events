import Data from "./Data";
import Member from "./Member";
import ReviewSection from "./ReviewSection";
import useGetData from "./useGetData";
import useMemberData from "./useMemberData";
import useRating from "./useRating";

const Home = () => {
    
    const [datas]=useGetData();
    const [members]=useMemberData();
    const [reviews]=useRating();
    

    return (
        <>
        <div className="relative">
            <img className="w-full h-[700px] brightness-50" src="https://i.ibb.co/BP04PL5/restaurant-hall-with-tables-decorated-with-tall-vases-with-roses.jpg" alt="" />
            <div className="absolute lg:left-12 bottom-80  font-extrabold">
                <h1 className="text-[#efe0ca] lg:text-5xl text-center ">Transforming Dreams into Magical Celebrations <span className="lg:text-7xl">Welcome to</span> <span className="text-[#fe5000] lg:text-7xl">Raf Events</span></h1>
            </div>
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
        <div  className="bg-[#f4ede2]">
            <h1 className="text-center text-5xl font-bold text-[#fe5000] pt-4">Customer Reviews</h1>
        </div>
        <div >
            <ReviewSection reviews={reviews}></ReviewSection>
        </div>
        </>
        
    );
};

export default Home;