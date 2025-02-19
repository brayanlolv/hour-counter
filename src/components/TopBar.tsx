import Semester from "./Semester";
import { Button } from "./ui/button";
import HourValue from "@/hooks/HourValue";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

function TopBar(){
    return(
    <div className=" flex flex-col gap-1 w-10/12 sm:flex-row sm:justify-between  ">
        
        <div>
        <HourValue/>
        </div>


        <Dialog >
        <DialogTrigger asChild>
            <Button variant="outline" className="margin">Mostrar Ultimos Meses</Button>
        </DialogTrigger>

    {/* depois posso adcionar title, description e footer */}
        <DialogContent className=" w-screen my-4 max-w-screen-sm flex justify-start" >
            <Semester />

            
        </DialogContent>

       

    </Dialog>

    
    </div>


)



}

export default TopBar