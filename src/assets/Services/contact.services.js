import axios from "axios";
import { config } from "./env.services";

const endpoint = 'contact'



const contactSgCodes = async(data) => {
    try {
        const response = await axios.post(`${config.api + endpoint}/createContact`, data , {
          ...config.options,
        });
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }
}



const methods = {
    contactSgCodes
}


export default methods