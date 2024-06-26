import { weekDays } from "@/utils/names"
import { getDataHour,getPayment } from "@/utils/setData"
import SetHourBtn from "@/components/SetHourBtn"
import { loopDay } from "@/utils/actualDate"// import { getDate } from "@/utils/actualDate"

import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Children, useState } from "react"
interface propLista{
    date:number,
    month:number,
    year:number,
    day:number,
    allMonth:boolean


}

interface propLi{
    date:number,
    month:number,
    year:number,
    day:number,
    hour:number
}


// MainCard         setMonth its right now here

       //List

              //li  it needs be called here

// one is inside of the other






const price_hour = getPayment()

function Li({prop,children}:{prop:propLi,children:any}){

    return(
        <>lista item
        {prop.date + 1} {weekDays[prop.day]} {/*<SetHourBtn date={prop} hourp={hourp}/>*/ }{children}  { price_hour * prop.hour} RS$
        <br/>
        </>
    )
}


function Lista({prop,monthHistory,setMonth}:{prop:propLista,monthHistory:number[],setMonth:Function}){
    
    const liArray = []
    // const [hours,setHours] = useState( getDataHour(prop.month,prop.year))
    // const hours:number[] = getDataHour(prop.month,prop.year)

    let day:number = prop.day
        let stop = prop.date-5
        if(prop.allMonth){
            stop = -1 
        }

        for(let i = prop.date;i >stop && i >-1 ;i-- ){

            let hour:number = 0
            if(monthHistory[i]!= null){
                hour = monthHistory[i]
            }
    
            const paramli :propLi = {
                date:i,
                day:day,
                hour:hour,
                month:prop.month,
                year:prop.year
    
            }
            liArray.push(
                // <Li key={i} hourp={hours[i]} prop={paramli}/>
                <Li  key={i} prop={paramli}>
                        <SetHourBtn key={i} date={paramli} hourp={monthHistory[i]}
                        onSet={setMonth}                   
                           />
                </Li>

            )

            day = loopDay(day)
        }
    

   

    return(
        <div>
                {/* <p className='color-blue bg-cyan-500'>teste</p> */}
        {/* <Li prop={{date:prop.date,day:prop.day}}></Li>
        <Li prop={{date:prop.date,day:prop.day}}></Li>
        <Li prop={{date:prop.date,day:prop.day}}></Li> */}
      
        {liArray}
        {/* <ScrollArea className="h-[200px] w-[600px] rounded-md border">
                {liArray.map((dayCard,i) => (
                    <>
                        <div key={i} >
                            {dayCard}
                        </div>
                       
                    </>
                ))}
            </ScrollArea> */}
     
        </div>
      
    )
}

export  default Lista