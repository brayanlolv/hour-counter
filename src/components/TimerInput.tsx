import { useState, useEffect,useRef } from "react"

import { Input, } from "@/components/ui/input"






function TimerInput({setValues}:{setValues:Function}) {

    const houript = useRef<HTMLDialogElement>();

    const [min,setMin] = useState("0");
    const [hour,setHour] = useState("0")

    useEffect(() => {
        if(min.length > 1  ){
             houript.current?.focus()
        }
            setValues(`${hour}:${min}`)
     }
        , [min,hour])

    return (
        <div className="flex  w-10/12 items-center ">

            <Input maxLength={2} type="number" ref={houript} placeholder="horas"onChange={(e)=>{
                setHour(e.target.value)
            }} />

                <h1 className="w-3/12 text-center text-2xl font-semibold	">:</h1>
            <Input autoFocus={true} type="number"   maxLength={2}  placeholder="min" onChange={(e)=>{
                setMin(e.target.value)
            }}/>

        </div>
    )

}

export default TimerInput