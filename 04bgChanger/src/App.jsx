import { use, useState } from "react"

function App() {

 const [color, setColor] = useState('olive')

  return (
    <>
  <div

  className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">

      <button
    onClick={() => setColor('red')}
    className="outline-none px-5 py-1.5 rounded-xl shadow-2xl font-semibold text-white  " 
    style={{backgroundColor: "red"}}>Red</button>
      <button
    onClick={() => setColor('purple')}
    className="outline-none px-5 py-1.5 rounded-xl shadow-2xl font-semibold text-white  " 
    style={{backgroundColor: "purple"}}>purple</button>
      <button
    onClick={() => setColor('violet')}
    className="outline-none px-5 py-1.5 rounded-xl shadow-2xl font-semibold text-white  " 
    style={{backgroundColor: "violet"}}>violet</button>
      <button
    onClick={() => setColor('gray')}
    className="outline-none px-5 py-1.5 rounded-xl shadow-2xl font-semibold text-white  " 
    style={{backgroundColor: "gray"}}>gray</button>
      <button
    onClick={() => setColor('yellow')}
    className="outline-none px-5 py-1.5 rounded-xl shadow-2xl font-semibold text-white  " 
    style={{backgroundColor: "yellow"}}>yellow</button>

       </div>
    </div>
  </div>
    </>
  )
}

export default App
