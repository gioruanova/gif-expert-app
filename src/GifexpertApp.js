import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifexpertApp = () => {

    const [categories, setCategories] = useState(['Marvel']);

    // const handleAdd = () => {
    // //opcion 1
    // setCategories(['Caballeros del Zodiaco', ...categories]);

    // //opcion 2. es un callback que primero da el estado anterior(categories, y luego el nuevo estado (setCategories)
    // // setCategories( cats =>[...categories,'Ranma 1/2']);

    //}

    return (
        <>
            <h2>API GIF GEEK</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category}
                            category={category} />

                    ))
                }
            </ol>

        </>
    )
}
