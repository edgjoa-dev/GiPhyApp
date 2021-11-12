import React from 'react'
import { useFetchsGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';




export const GifGrid = ({category}) => {


    const {data:images, loading} = useFetchsGifs(category);
    console.log(loading);


    return (

        <>
                {loading && <p className="animate__animated animate__flash" >Loading...</p>}

            <div className="card--grid" >
                
                {
                    images.map( img =>( 
                    <GifGridItem 
                    key={img.id}
                    { ...img }
                    />
                    
                ) )
                
                }


            </div>
        </>

    )
}
