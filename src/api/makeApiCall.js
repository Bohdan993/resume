import axios from "axios";
import { apiPrefix, headers } from "../constants/common";

export function makeApiCall (method, endpoint, data = null, customHeaders) {
    let FD;

    const options = {
      method,
      "url": `${apiPrefix}${endpoint}`,
      "headers": method === 'post' ? headers : customHeaders ? customHeaders : {Authorization: headers.Authorization}
    }

    if(data) {
      FD = new FormData();
      for (const [name, value] of Object.entries(data)) {
        FD.append(name, value);
      }

      options.data =  FD;
    }

    return new Promise(async (resolve, reject)=>{
      try {
          const response = await axios(options);
          return resolve(response);
      } catch (err) {
            console.error('[Api]: ', err);
            reject(new Error('Internal server error'));
      }
    
    })}