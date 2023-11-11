import React, { useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [ keyword, setkeyword] = useState("San Francisco");
    const [ location, setLocation] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const onSearch = (searchKeyword) => {
        // console.log(searchKeyword);
        setIsLoading(true);
        setkeyword(searchKeyword);
        if(!searchKeyword.length){
            //dont do anything
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false);
            setLocation(result);
            console.log(result); 
            //to search and get result          
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
            // console.log(err);
            //if have error => not found
        });
    };


    return(
        <LocationContext.Provider
       value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,

       }} 
        >{children}</LocationContext.Provider>
    )
}
// MY CODE^^^^^^^^^^^^^^^^^^^^^^^^^ 





