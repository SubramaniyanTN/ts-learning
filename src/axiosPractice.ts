import axios, { AxiosResponse } from "axios"
import {z} from 'zod'
import { BankHoliday, BankHolidaySchema } from "./types/ukHolidayTypes"
import { DogSchema, DogsResponseSchema, DogsResponseType } from "./types/dogResponseType"
import { CatBreedSchema, CatBreedType } from "./types/catResponseType"

// Bank Holidays
// let holidays:Array<BankHoliday>=[]
// const setHolidays=(response:BankHoliday[])=>{
//     try {
//         const parsed=z.array(BankHolidaySchema).parse(response)
//         console.log("Types are Correctly matched ✅")
//         holidays=[...holidays,...parsed]
//     } catch (error) {
//         console.log("Oops, Type mismatch ❌")
//     }
// }
// const fetchHolidays=async()=>{
//   try {
//     const response=await axios.get("https://www.gov.uk/bank-holidays.json")
//     setHolidays(response.data["england-and-wales"]["events"])
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchHolidays()


// Dogs
// let dogs:DogsResponseType["data"]=[]
// const setDogs=(response:DogsResponseType["data"])=>{
//     try {
//       const parsed = z.array(DogSchema).parse(response)
//       console.log("Types are Correctly matched ✅")
//       dogs=[...dogs,...parsed]
//     } catch (error) {
//       console.log("Oops, Type mismatch ❌")
//     }
// }
// const fetchDogs=async()=>{
//     try {
//         const response=await axios.get("https://dogapi.dog/api/v2/breeds")
//         setDogs(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchDogs()

// Cats

// let cats:Array<any>=[]
// const setCats=(response:CatBreedType[])=>{
//     try {
//       const parsed = z.array(CatBreedSchema).parse(response)
//       console.log("Types are Correctly matched ✅")
//       cats=[...cats,...parsed]
//     } catch (error) {
//       console.log("Oops, Type mismatch ❌")
//     }
// }
// const fetchCats=async()=>{
//     try {
//         const response=await axios.get("https://catfact.ninja/breeds")
//         setCats(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchCats()





