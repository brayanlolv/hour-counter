import { months } from "@/utils/names"
import AllMonth from "./AllMonth"
import Lista from "./Lista"
import { useState, useEffect } from "react"

import { getDataHour } from "@/utils/setData";
import { arraySum } from "@/utils/math";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface propMainCard{
    month:number,
    year:number,
    // totalHours:number,
    day: number,
    date:number,
    payment:number
}

function format(x:number):String{
    return x.toFixed(2)
}

function MainCard({data}:{data:propMainCard} ) {

    // console.log(data.totalHours)
    const [monthHistory,setMonthHistory] = useState( getDataHour(data.month,data.year))

    const [total,setTotal]:any= useState(arraySum(monthHistory))
    const [payiment,setPayiment] = useState(0)

    //gambiarra 
    useEffect(()=>{

        
    console.log(data.payment + "taotal" + total)

        console.log("useEffect aplied")
        console.log(monthHistory)
        // setTotal(arraySum(monthHistory))
        setPayiment(total * data.payment)
    },
    // [monthHistory]
    [total,monthHistory]
)

    const cb = (value:number,i:number)=>{
        console.log("set month chamado")
            let months = monthHistory
            months[i] = value
            setMonthHistory(months)        
            setTotal(arraySum(monthHistory))
            }


    return (
        <div className="w-[550px]">

            <Card >
                <CardHeader >
                <div className="flex justify-between "   >
                    <div>
                        <CardTitle>{months[data.month]}</CardTitle>
                        <h1>{ data.year}</h1>
                     
                        
                    </div>
                    <CardDescription className="text-lg">
                        <div >{format(total)}hr/s</div>
                        <div>{format(payiment)}R$</div>
                        
                    </CardDescription>
                </div>
                </CardHeader>

                <CardContent>
              
                <Lista setMonth={cb} monthHistory={monthHistory} prop={{date:data.date,month:data.month,year:data.year,day:data.day,allMonth:false}}/>
                <AllMonth  setMonth={cb} monthHistory={monthHistory} prop={{date:data.date,month:data.month,year:data.year,day:data.day,allMonth:true}}/>
    
                </CardContent>
        
            </Card>

            

        </div>
    )
}

export default MainCard