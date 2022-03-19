//This file was automatically generated.  Any changes to it may be overwritten 
//See the ModelTemplate.tst TypeScript Template for more information
import * as defs from "../Definitions";

import { User } from "./User";

export interface EventLog {
  
    id: number;
  
    actionId: number;
  
    instigatorId: number;
  
    receiverId: number;
  
    oldValue: string;
  
    newValue: string;
  
    timestamp: string | null;
  
    instigator?: User | null;
  
}
