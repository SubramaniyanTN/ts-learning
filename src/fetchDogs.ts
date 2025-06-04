import axios, { AxiosResponse } from "axios";
import { DogsResponseType } from "./dogResponseType";

export const fetchDogs=async()=>{
    try {
        // const response=await axios.get(`https://dogapi.dog/api/v2/breeds`,{
        // })
        // response.data.
        const response=await axios.get<DogsResponseType,AxiosResponse<DogsResponseType>>(`https://dogapi.dog/api/v2/breeds`,{
        })
        console.log(JSON.stringify(response.data))

    } catch (error) {
        console.log(error)
    }
}

export const fetchDog=async(id="036feed0-da8a-42c9-ab9a-57449b530b13")=>{
    try {
        const response=await axios.get(`https://dogapi.dog/api/v2/breeds/${id}`,)
        console.log(JSON.stringify(response.data))
    } catch (error) {
        console.log(error)
    }
}