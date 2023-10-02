import { useState } from "react";

const Nationality = ()=>{

    const [nationality, setNationality] = useState('suomi')

    const nationalichanger = ()=>{
        setNationality('somali')
    }

    return <>
    <button className="bg-red-300 rounded-lg mt-6" onClick={nationalichanger} >Nationality</button>
    <p>You nationality is {nationality} </p>
    </>
}
export default Nationality;