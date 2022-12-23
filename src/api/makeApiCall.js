import axios from "axios";
import { apiPrefix, headers } from "../constants/common";

export function makeApiCall (method, endpoint, data = {}) {
    return new Promise(async (resolve, reject)=>{
      try {
          const response = await axios({
            method,
            "url": `${apiPrefix}${endpoint}`,
            "headers": method === 'post' ? headers : {}
          }
          );
    
          return resolve(response);
    
      } catch (err) {
            console.error('[Api]: ', err);
            reject(new Error('Internal server error'));
      }
    
    })}