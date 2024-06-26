import Semester from "./Semester";
import { Button } from "./ui/button";
import HourValue from "@/hooks/HourValue";

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

function TopBar(){
    return(
    <div>
        <HourValue/>


        <Dialog >
        <DialogTrigger asChild>
            <Button variant="outline" className="margin">Mostrar Ultimos Meses</Button>
        </DialogTrigger>

    {/* depois posso adcionar title, description e footer */}
        <DialogContent >
            <Semester/>
        </DialogContent>


    </Dialog>

    
    </div>


)



}

export default TopBar