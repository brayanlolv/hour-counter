
// interface{

// }

//retrona um dia, um mes ee um ano  
const date = new Date();

function getDate():number[]{
    //-1 porque ele retorna de 1-31, e preciso pradronizar a partir do 0
    return [date.getDate()-1,date.getMonth(),date.getFullYear(),date.getDay()]
}

function loopDay(day:number):number{
    if(day > 0){
        return day - 1
    }
    return 6

}








export {getDate,loopDay}