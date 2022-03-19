//This file was automatically generated.  Any changes to it may be overwritten 
//See the ModelTemplate.tst TypeScript Template for more information
import * as defs from "../Definitions";

import { AppPermission } from "./AppPermission";
import { EventLog } from "./EventLog";

export interface User {
  
    id: number;
  
    email: string;
  
    username: string;
  
    description: string;
  
    profilePicture: number[] | null;
  
    verified: boolean;
  
    active: boolean;
  
    created: string | null;
  
    deleted: boolean;
  
    lastLogin: string | null;
  
    publicDisplayEmail: boolean;
  
    appPermissions?: AppPermission[] | null;
  
    eventLogs?: EventLog[] | null;
  
}
