import React from "react";
import { ReactDOM } from "react";



export default function CardItem() {


    const [thingsArray, setThingsArray] = React.useState([])

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)


    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1} `]
        })
    }


    return (
        <div className="border-black border-2 rounded h-80 w-80 ml-[480px] mt-[0px] rounded-[20px] text-center pt-[40px]">
            <h1 className="font-bold border-2 border-black rounded-[20px] w-[180px] ml-[70px] bg-sky-600 hover:bg-sky-700 hover:cursor-pointer" onClick={addItem}>Add Item</h1>
            <div className="mt-[20px]">
                <h1 className="py-[10px]">
                    {thingsArray}
                </h1>
            </div>
        </div>
    )
}