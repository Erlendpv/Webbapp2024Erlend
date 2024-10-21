import { format } from "date-fns";

export function FormateDate(createdAt: string){
    return format(new Date(createdAt), "dd.MMM.yyyy");
}