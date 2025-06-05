import { z } from "zod";

export type DogsResponseType={
    data: Array<{
            id: string
            type:string
            attributes: {
                name: string;
                description: string;
                life: {
                    max: number,
                    min: number
                },
                male_weight: {
                    max: number,
                    min: number
                },
                female_weight: {
                    max: number
                    min: number
                },
                hypoallergenic: boolean
            },
            relationships: {
                group: {
                    data: {
                        id:string
                        type:string
                    }
                }
            }
        }>,
    meta: {
        pagination: {
            "current": number;
            "next":  number;
            "last":  number;
            "records": number;
        }
    },
    links: {
        "self": string;
        "current":string;
        "next": string;
        "last":string;
    }
}

export const DogSchema = z.object({
  id: z.string(),
  type: z.string(),
  attributes: z.object({
    name: z.string(),
    description: z.string(),
    life: z.object({
      max: z.number(),
      min: z.number(),
    }),
    male_weight: z.object({
      max: z.number(),
      min: z.number(),
    }),
    female_weight: z.object({
      max: z.number(),
      min: z.number(),
    }),
    hypoallergenic: z.boolean(),
  }),
  relationships: z.object({
    group: z.object({
      data: z.object({
        id: z.string(),
        type: z.string(),
      }),
    }),
  }),
});

export const DogsResponseSchema = z.object({
  data: z.array(DogSchema),
  meta: z.object({
    pagination: z.object({
      current: z.number(),
      next: z.number(),
      last: z.number(),
      records: z.number(),
    }),
  }),
  links: z.object({
    self: z.string(),
    current: z.string(),
    next: z.string(),
    last: z.string(),
  }),
});

// You can infer the TS type if needed
export type DogsResponseTypeFromZod = z.infer<typeof DogsResponseSchema>;