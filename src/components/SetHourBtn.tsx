import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import {} from "@/utils/setData"
import { useState, useRef } from "react"
import { setDataHour } from "@/utils/setData"


interface propSetHour{
    date:number,
    month:number,
    year:number,
    hour:number
}

import TimerInput from "./TimerInput"

function SetHourBtn({date,onSet}:{date:propSetHour,onSet:Function}){

    const submit = useRef<HTMLDialogElement>();

    function submited(){
        setDataHour(date.date,date.month,date.year,hour)
        onSet(hour,date.date)
    }


    const[hour,setHour] = useState(date.hour);//por a funcao que usa o coisa


    return(
    <>
  
    <Dialog >
        <DialogTrigger asChild >
            <Button variant="outline" className="margin">{hour}Hrs</Button>
        </DialogTrigger>

        <DialogContent className='bg-white' onKeyDown={(e)=>{
            if(e.key==="Enter"){
                submited()
                submit.current?.click()
            }
        }}>
            <DialogHeader>
                <DialogTitle>Informe o tempo de hora extra feito no dia</DialogTitle>
                <DialogDescription>
                    informacao usada para calcular o seu pagamento
                </DialogDescription>
            </DialogHeader>

            {/* <Label htmlFor="name" className="text-right">
                Name
            </Label> */}
            <TimerInput setValues={(args:string)=>{
                        const [hourIpt,minIpt] : number[]= args.split(":").map((x)=>parseFloat(x))
                        setHour(
                            parseFloat(
                                (hourIpt  + (minIpt / 60)).toFixed(2)
                            )
                        )
            }} />

{/*             
            <Input onChange={(e)=>{
                const [hourIpt,minIpt] : number[]= e.target.value.split(":").map((x)=>parseFloat(x))    
                setHour(
                    parseFloat(
                        (hourIpt  + (minIpt / 60)).toFixed(2)
                    )
                )
                
            }} 
                id="paymentvalue"
                defaultValue={date.hour}
                type="time"
                // type="submit"
                className="col-span-3"
            />*/}


            <DialogFooter>
                <DialogClose asChild  >
                    <Button  ref={submit} onClick={submited} >Salvar</Button>
                </DialogClose>

            </DialogFooter>
        </DialogContent>


    </Dialog>

</>
)
}

export default SetHourBtn