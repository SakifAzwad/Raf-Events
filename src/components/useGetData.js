import { useEffect, useState } from "react";

const useGetData = () => {
    const [datas,setData] = useState()

    useEffect(()=>{

        fetch('/data.json')
        .then(res=>res.json())
        .then(data => setData(data))

    },[])
    
    return [datas];
};

export default useGetData;