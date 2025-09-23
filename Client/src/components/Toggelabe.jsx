import {useState} from 'react'
const Toggelable=(props)=>{
   const [visible,setVisible]=useState(false)

   const togglevisibility=()=>{
      setVisible(!visible)
   }
   const hidewhenvisible={display:visible?'none':''}
   const showwhenvisible={display:visible?'':'none'}

   return(
     <>
     <div style={hidewhenvisible}><button className="bg-indigo-500 hover:bg-indigo-600 p-4 rounded-md text-white" onClick={togglevisibility}>{props.buttonLabel}</button></div>
     <div style={showwhenvisible}>
        {props.children}
        <br />
        <button onClick={togglevisibility}
         className="z-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
         >
            Cancel
       </button>
     </div>
     </>
   )
}

export default Toggelable