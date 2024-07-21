import { UserData } from "./UserData"

export interface StandardResponse  {
    message: string, 
    data: 
    {
        user: UserData, 
        token: string
    }, 
    
    status: true
}