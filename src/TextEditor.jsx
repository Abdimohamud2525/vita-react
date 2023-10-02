import { useState } from "react"

export const TextEditor = ()=>{


    const [text, setText] = useState('Syötä teksti tähän')

    const HandChanges = (event)=>{
        setText(event.target.value);

        }
        return <>
      <textarea value = {text} onChange={HandChanges} rows={10} cols={15}/>
      <h1>Kirjoita tähän mitä haluat</h1>
       <p>syötämäsi teksti {text}: {text}</p>
        </>

    }