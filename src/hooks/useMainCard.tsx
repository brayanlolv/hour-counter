
import { getDate } from "@/utils/actualDate"
import {  getPayment } from "@/utils/setData";
// import { weekDays } from "@/utils/names";
import { arraySum } from "@/utils/math";
import MainCard from "@/components/MainCard";
import { getDataHour } from "@/utils/setData";


const [day, month,year,day_week] = getDate()
function UseMainCard() {

    const month_history = getDataHour(month,year)


    console.log(month_history)
    let total_hours_month = arraySum(month_history)

    const payment: number = getPayment() 

    const prop = {
        month:month,
        year:year,//faltando o ano !!!!
        day: day_week,
        date:day,
        totalHours:total_hours_month,
        payment:payment

    }

    return (
        <>  
            <MainCard data={prop}  />
        </>
    );
}

export default UseMainCard;


