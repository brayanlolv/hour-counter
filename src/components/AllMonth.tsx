import Lista from "./Lista"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"




interface propLista {
    date: number,
    month: number,
    year: number,
    day: number,
    allMonth: boolean


}


function AllMonth({ prop, monthHistory, setMonth }: { prop: propLista, monthHistory: number[], setMonth: Function }) {

    return (
        <>
            <Dialog  >
                <DialogTrigger asChild>
                    <Button variant="outline" className="margin">Mostrar detalhes mes</Button>
                </DialogTrigger>
             
                {/* <DialogOverlay> */}
                    {/* <Lista setMonth={setMonth} monthHistory={monthHistory} prop={prop} /> */}
                {/* </DialogOverlay> */}

                <DialogContent className='bg-white'>
                    <DialogHeader>
                        <DialogTitle>Todos os dias detalhes</DialogTitle>
                    </DialogHeader>


                    <Lista setMonth={setMonth} monthHistory={monthHistory} prop={prop} />

                </DialogContent>


            </Dialog>

 
        </>
    )
}

export default AllMonth