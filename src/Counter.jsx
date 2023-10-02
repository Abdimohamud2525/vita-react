import { useEffect, useState , initialState, useReducer } from 'react'
import CounterReduser from './CounterReduser'

function Counter() {

  // useState is userfull when the strictly is small project
  // const [Counter , SetCounter] = useState(0)
  // inted state use initila state
  const initialState = {counter : 0}

   const [state, dispatch]= useReducer(CounterReduser,initialState)
  // useEffect(() => {
  //   document.title = `You clicked ${Counter} times`;
  //   console.log(Counter);
  // }, [Counter]); // Lisätty riippuvuuslista, jotta effect suoritetaan vain kun counter muuttuu

  // useEffect(()=>{
  //   console.log('counponed did mount') // tämä kutsutaan enssimäine kerta kun console latautu

  // },[])

  // useEffect(()=>{
  //   console.log('counponed did aupdates') // tämä latautuu vain jos tapahtu muutos
  // })
 
  // useEffect(()=>{
  //   return(
  //     console.log("counponed will anmounted")
  //   )
  // })
  return (
    <>
    <div  className='border border-300 bg-red-300 flex space-x-10'>
        <h1>you clickt {state.counter} times</h1>
       <button 
       onClick={()=>dispatch({type: 'increment'})} className='bg-green-400 color-white px-5 py-3 rounded-lg mt-4 '>increment</button>

    <button 
       onClick={()=>dispatch({type: 'decrement'})} className='bg-red-400 color-white px-5 py-3 rounded-lg mt-4 '>decrement</button>
        </div>
    </>
  )
}

export default Counter
