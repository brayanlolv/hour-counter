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
import { useState } from "react"
import { setDataHour } from "@/utils/setData"


interface propSetHour{
    date:number,
    month:number,
    year:number,
    hour:number
}

function SetHourBtn({date,hourp,onSet,key}:{date:propSetHour,hourp:number,onSet:Function,key:number}){
    
    const[hour,setHour] = useState(date.hour);//por a funcao que usa o coisa


    return(
    <>
  
    <Dialog >
        <DialogTrigger asChild>
            <Button variant="outline" className="margin">{hour}Hrs</Button>
        </DialogTrigger>

        <DialogContent className='bg-white'>
            <DialogHeader>
                <DialogTitle>Informe o tempo de hora extra feito no dia</DialogTitle>
                <DialogDescription>
                    informacao usada para calcular o seu pagamento
                </DialogDescription>
            </DialogHeader>

            {/* <Label htmlFor="name" className="text-right">
                Name
            </Label> */}
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
            />


            <DialogFooter>
                <DialogClose asChild>
                    <Button onClick={()=>{
                        console.log("salvou a hora "+ date.date)
                        
                        setDataHour(date.date,date.month,date.year,hour)
                        onSet(hour,date.date)
                        // location.href = location.href;
                    }
                        } >Save changes</Button>
                </DialogClose>

            </DialogFooter>
        </DialogContent>


    </Dialog>

</>
)
}

export default SetHourBtn