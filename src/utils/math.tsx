
function arraySum(array:number[]): number {
    return array.reduce((partialSum, a) => partialSum + a, 0);
}

export{
    arraySum
}