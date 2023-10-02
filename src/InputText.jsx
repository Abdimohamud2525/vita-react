import { useState } from "react"

const InputText = ()=>{

    const[text, setText] = useState('')

    const HandeChanges = (event)=>{
        setText(event.target.value)
    }
    return (
        <div>
          <input
            onChange={HandeChanges}
            type="text"
            placeholder="Syötä teksti"
          />
          <p>Syötetty teksti: {text}</p>
        </div>
      );
    };
    
export default InputText;