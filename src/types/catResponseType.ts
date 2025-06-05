export type CatBreedType = {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
};

export type PaginationLinkType = {
  url: string | null;
  label: string;
  active: boolean;
};

export type CatBreedsResponseType = {
  current_page: number;
  data: CatBreed[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

import { z } from "zod";

// Individual cat breed
export const CatBreedSchema = z.object({
  breed: z.string(),
  country: z.string(),
  origin: z.string(),
  coat: z.string(),
  pattern: z.string(),
});

// Pagination link (used for nav like "Next", "Previous", etc.)
export const PaginationLinkSchema = z.object({
  url: z.string().nullable(),
  label: z.string(),
  active: z.boolean(),
});

// Full response schema
export const CatBreedsResponseSchema = z.object({
  current_page: z.number(),
  data: z.array(CatBreedSchema),
  first_page_url: z.string(),
  from: z.number(),
  last_page: z.number(),
  last_page_url: z.string(),
  links: z.array(PaginationLinkSchema),
  next_page_url: z.string().nullable(),
  path: z.string(),
  per_page: z.number(),
  prev_page_url: z.string().nullable(),
  to: z.number(),
  total: z.number(),
});

// Type inference (optional but useful)
export type CatBreed = z.infer<typeof CatBreedSchema>;
export type PaginationLink = z.infer<typeof PaginationLinkSchema>;
export type CatBreedsResponse = z.infer<typeof CatBreedsResponseSchema>;
