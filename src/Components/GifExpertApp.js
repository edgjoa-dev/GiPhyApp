import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';



export const GifExpertApp = () => {

    const [Categories, setCategories] = useState([' ']);

    return (
        <div>
            <h1 className="animate__animated animate__fadeInDown"  >GiPhy App</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>

                <ol>
                    {
                        Categories.map( category =>(
                            <GifGrid 
                            key={category}
                            category={category}
                            />
                        ))
                    }
                </ol>

        </div>
    )
}
