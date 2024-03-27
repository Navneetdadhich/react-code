import React, {useState}from 'react'
import Products from './Products';

function App() {
  // let marks = 80
  const [marks, setMarks] = useState(0)
  return (
    <>
    <Products/>
    <div className="text-red-400 mx-14">your marks is {marks}</div>

    <button onClick={()=>{
      setMarks(marks+1);
    }} className="mx-10 border-slate-950 px-2 border-2 rounded-md my-2">add</button>

<button onClick={()=>{
      setMarks(marks-1);
    }} className="mx-10 border-slate-950 px-2 border-2 rounded-md my-2">subtract</button>
    </>
    
  );
}

export default App