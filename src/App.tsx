

import "@/app/globals.css"
// import "./teste.css"
// import "./output.css"

import TopBar from './components/TopBar'
// import Semester from './components/Semester'
// import HourValue from './hooks/HourValue'
import UseMainCard from './hooks/useMainCard'
function App() {

  return (
    <div className="h-screen flex flex-col items-center  max-w-screen-sm mx-auto gap-4 mt-5">

    {/* <Semester/> */}
    {/* <HourValue/> */}
    
    <TopBar/>

    <UseMainCard />

    fazendo o componente com todos os meses
      
   
    
    
    </div>


  )
}

export default App
