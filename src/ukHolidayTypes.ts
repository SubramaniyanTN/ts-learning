import axios, { AxiosResponse } from "axios";

export type BankHoliday = {
  title: string;
  date: string; // ISO 8601 date, e.g. "2025-12-25"
  notes: string;
  bunting: boolean;
};

export type RegionHolidays = {
  division: string; // e.g. "england-and-wales"
  events: BankHoliday[];
};

export type UKBankHolidays = {
  "england-and-wales": RegionHolidays;
  scotland: RegionHolidays;
  "northern-ireland": RegionHolidays;
};

import { z } from "zod";

// Individual bank holiday event
export const BankHolidaySchema = z.object({
  title: z.string(),
  date: z.string(), // ISO 8601 string (can be refined with .refine if needed)
  notes: z.string(),
  bunting: z.boolean(),
});

// Regional holiday section (e.g. "england-and-wales")
export const RegionHolidaysSchema = z.object({
  division: z.string(),
  events: z.array(BankHolidaySchema),
});

// Full UK bank holidays response
export const UKBankHolidaysSchema = z.object({
  "england-and-wales": RegionHolidaysSchema,
  scotland: RegionHolidaysSchema,
  "northern-ireland": RegionHolidaysSchema,
});

// Infer TypeScript types from schemas if needed
export type BankHolidayFromZod = z.infer<typeof BankHolidaySchema>;
export type RegionHolidaysFromZod = z.infer<typeof RegionHolidaysSchema>;
export type UKBankHolidaysFromZod = z.infer<typeof UKBankHolidaysSchema>;

const fetchUKHolidays=async()=>{
  try {
    const response=await axios.get<UKBankHolidays,AxiosResponse<UKBankHolidays>,Record<string, never>>("https://www.gov.uk/bank-holidays.json")
    console.log(JSON.stringify(response.data))
  } catch (error) {
    console.log(error)
}
}