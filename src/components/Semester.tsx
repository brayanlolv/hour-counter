
import MainCard from "./MainCard"
import { getDate } from "@/utils/actualDate"
import { getPayment } from "@/utils/setData"
import { getDataHour } from "@/utils/setData";
import { arraySum } from "@/utils/math";
import { ScrollArea } from "@/components/ui/scroll-area"


let [month, year] = [getDate()[1],getDate()[2]]

const hourValue = getPayment()


function decrementDate() {

    if (month > 0) {
        month--
    }
    else {
        month = 11
        year--
    }

}

function getDaysInMonth(m: number, y: number): number {
    return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
}

function getSemester():any[]{

    

    const semester:any[] = []

    for (let i = 0; i < 6; i++) {

        const last_day = getDaysInMonth(month + 1, year + 1) - 1

        const prop_date = new Date(year + 1, month, last_day + 1)

        const month_history = getDataHour(month, year)
        let total_hours_month = arraySum(month_history)
        console.log("mes array " +  month_history)
        console.log(month_history)


        const prop = {
            month: month,
            year: year ,//faltando o ano !!!!
            day: prop_date.getDay() -1,
            date: last_day,
            totalHours: total_hours_month,
            payment: hourValue 

        }
        console.log(prop)

        semester.push(<MainCard data={prop}  />)
        decrementDate()
        }
        [month, year] = [getDate()[1],getDate()[2]]
        return semester
}

function Semester() {
    

    const semester = getSemester()

     



    


    return (
        // <ScrollArea>
        <div className=" w-full ">
        



            <ScrollArea className="h-screen w-full ">
                {semester.map((monthCard,i) => (
                    <>
                        <div key={i} className="py-2">
                            {monthCard}
                        </div>
                       
                    </>
                ))}
            </ScrollArea>


        </div>
        // </ScrollArea>
    )
}

export default Semester