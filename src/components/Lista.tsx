import { weekDays } from "@/utils/names"
import { getPayment } from "@/utils/setData"
import SetHourBtn from "@/components/SetHourBtn"
import { loopDay } from "@/utils/actualDate"// import { getDate } from "@/utils/actualDate"

import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@radix-ui/react-scroll-area"

interface propLista {
    date: number,
    month: number,
    year: number,
    day: number,
    allMonth: boolean


}

interface propLi {
    date: number,
    month: number,
    year: number,
    day: number,
    hour: number
}


// MainCard         setMonth its right now here

//List

//li  it needs be called here

// one is inside of the other






const price_hour = getPayment()

function Li({ prop, children }: { prop: propLi, children: any }) {

    return (
        <div className="flex justify-between w-11/12 m">
            <div>
                dia {prop.date + 1}, {weekDays[prop.day]} {/*<SetHourBtn date={prop} hourp={hourp}/>*/}
            </div>
            <div>
                {children}  {price_hour * prop.hour} RS$
            </div>

        </div>
    )
}


function Lista({ prop, monthHistory, setMonth }: { prop: propLista, monthHistory: number[], setMonth: Function }) {

    const liArray = []
    // const [hours,setHours] = useState( getDataHour(prop.month,prop.year))
    // const hours:number[] = getDataHour(prop.month,prop.year)

    let day: number = prop.day
    let stop = prop.date - 5
    if (prop.allMonth) {
        stop = -1
    }

    for (let i = prop.date; i > stop && i > -1; i--) {

        let hour: number = 0
        if (monthHistory[i] != null) {
            hour = monthHistory[i]
        }

        const paramli: propLi = {
            date: i,
            day: day,
            hour: hour,
            month: prop.month,
            year: prop.year

        }
        liArray.push(
            // <Li key={i} hourp={hours[i]} prop={paramli}/>
            <Li key={i} prop={paramli}>
                <SetHourBtn  date={paramli} 
                    onSet={setMonth}
                />
            </Li>

        )

        day = loopDay(day)
    }




    if (prop.allMonth) {
        return (
            <div className="h-[80vh]" >


          <ScrollArea className="h-full w-[350px] mx-auto  overflow-y-auto      p-4">

          {liArray.map((element) => (
                    <>
                            {element}
                            <Separator className="my-2" />
                       
                    </>
                ))}


                </ScrollArea> 


            </div>
        )
    }



    return (
        <div>
            {liArray}
        </div>

    )
}

export default Lista