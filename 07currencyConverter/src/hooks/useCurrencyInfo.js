//creating custom hook here.

import { useEffect} from "react";
import { useState } from "react";    

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        //Usually API calls send the data in the form of string and we have to convert it into JSON format.
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) 
            .then((response) => response.json())
            .then((response) => setData(response[currency]))
            console.log(data);
    }, [currency]); //passing currency in the dependency array to call it when there is any change in the currency from frontend. 
    console.log(data);
    
    return data
}   

export default useCurrencyInfo;