import React, { useState } from 'react'

export default function StateHook() {
    const[mark, setMark] = useState({sub1:"",sub2:"",sub3:""})
    const [totolmark, setMarks] = useState("")

    let calculate=()=>{
       const total = mark.sub1 + mark.sub2 +mark.sub3
       setMarks(total)
    }
    
  return (
    <div>
        <h3 className='text-center bg-warning'>Functional Component Hooks</h3>
   Sub 01 <input type="number" onChange={(e) => setMark({ ...mark, sub1: parseInt(e.target.value) })} />
   <br></br><br></br>
   Sub 02 <input type="number" onChange={(e) => setMark({ ...mark, sub2: parseInt(e.target.value) })} />
   <br></br><br></br>
   Sub 03 <input type="number" onChange={(e) => setMark({ ...mark, sub3: parseInt(e.target.value) })} />
   <br></br><br></br>


<button className='btn btn-success' onClick={calculate}>Calculate Total</button><br></br>     
      <h2 className='border border-secondary w-25 mt-5 text-center  '>Total Value : {totolmark}</h2>

    
    </div>
  )
}
