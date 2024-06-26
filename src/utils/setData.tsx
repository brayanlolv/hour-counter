
//as data serao guardas como mes(formato numerico)_ano
//exemplo 0_2024   janeiro de 2024

import { getDate } from "./actualDate";

//por um so para arrumar o do dia

function getDataHour(month:number,year:number):number[]{
    const actualMonthStr =localStorage.getItem(`m${month}_${year}`)
    let actualMonthNmb:number[] = []
    if(actualMonthStr){
       actualMonthNmb= JSON.parse(actualMonthStr)
    }

    return actualMonthNmb

}

function setDataHour(day:number,month:number,year:number,value:number):void{
    
    //por parametros opcionais, e so caso for chamado vazio sete isso

    // const[day,month]:number[] = getDate()
    //adcionar ano

    const metadata:string = `m${month}_${year}` 

    // console.log(metadata +"value" + value)
    // console.log("setando a hora")
    if(localStorage.getItem(metadata) == null){
        // console.log("nulo")
        const array = new  Array(31).fill(0);
        localStorage.setItem(metadata,JSON.stringify(array))
    }

    const actualMonthStr =localStorage.getItem(metadata)

    let actualMonthNmb:number[] = []
    if(actualMonthStr){
       actualMonthNmb= JSON.parse(actualMonthStr)
    }
    actualMonthNmb[day] = value
    console.log(actualMonthNmb)

    localStorage.setItem(metadata,JSON.stringify(actualMonthNmb)) 
    //adicionar ano no final do array
    // return [day,month]
}






function setPayment(value : number):void{//referente ao valor hora
    localStorage.setItem("payment",value.toString());
}

function getPayment():number{//referente ao valor hora
    const value = localStorage.getItem("payment")

    if(value == null){
        setPayment(0)
        return 0
    }

    return    parseFloat(value)
}

//escrever as funcao que consultam e setam 

export {setDataHour,getPayment,setPayment,getDataHour}