import axios from "axios";
import React, { useEffect, useState } from "react";
import Tabledata from "./tabledata";


const Fetchdata = ()=>{

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

    const [data, setData] = useState([])

   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }

        };

        fetchData(); // Call the function to fetch data when component mounts
    }, []);
    // console.log(data)

    return(
        <div>
            
            <Tabledata data={data} />

        </div>
    )
}

export default Fetchdata;