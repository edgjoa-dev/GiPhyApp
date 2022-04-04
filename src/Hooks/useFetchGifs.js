import { useState, useEffect } from 'react';
import { getGif } from '../Helpers/getGifs';


export const useFetchsGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });


     useEffect(() => {
         
        getGif(category)
            .then( imgs => {
             
            setTimeout(() => {
                setstate({
                 data: imgs,
                 loading: false
             })
                
            }, 1500);
            
        });
            
     }, [category])


    return state; // retorna el objeto data y loading
   
};
