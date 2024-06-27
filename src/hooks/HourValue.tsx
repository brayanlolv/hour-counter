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
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {setPayment, getPayment} from "@/utils/setData"



//ver como parssar uma funcao como parametro
function HourValue() {

    //por o valor a hora e por um modal com para podermos atualiza la
    
    const [paymentHour,setPaymentHour] = useState(getPayment());

    return (
        <>  
            
            
       
            <Dialog >
                <DialogTrigger asChild>
                    <Button variant="outline" className="w-full ">ganho à hora: {paymentHour}RS$</Button>
                </DialogTrigger>




                <DialogContent className='bg-white'>
                    <DialogHeader>
                        <DialogTitle>Informe o ganho por hora</DialogTitle>
                        <DialogDescription>
                            informacao usada para calcular o seu pagamento
                        </DialogDescription>
                    </DialogHeader>

                    {/* <Label htmlFor="name" className="text-right">
                        Name
                    </Label> */}
                    <Input onChange={(e)=>setPaymentHour(parseFloat(e.target.value))}
                        id="paymentvalue"
                        className="col-span-3"
                        type="number"
                    />


                    <DialogFooter>
                        <DialogClose asChild>
                            <Button onClick={()=>{setPayment(paymentHour)
                                           location.href = location.href;}
                            }>Salvar</Button>
                        </DialogClose>

                    </DialogFooter>
                </DialogContent>


            </Dialog>

        </>
    )


}

export default HourValue