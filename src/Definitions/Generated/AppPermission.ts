//This file was automatically generated.  Any changes to it may be overwritten 
//See the ModelTemplate.tst TypeScript Template for more information
import * as defs from "../Definitions";

import { User } from "./User";

export interface AppPermission {
  
    id: number;
  
    userId: number;
  
    canSetProfilePicture: boolean;
  
    canSetUsername: boolean;
  
    canSetDescription: boolean;
  
    user?: User | null;
  
}
