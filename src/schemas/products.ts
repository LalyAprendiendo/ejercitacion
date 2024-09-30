import {z} from "zod"

const productsSchema = z.object({
    description: z
      .string({
        invalid_type_error: "El nombre debe ser de tipo STRING",
        required_error: "El nombre es requerido",
      })
      .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
      .max(25, {
        message: "El nombre tiene que tener como MÁXIMO 25 caracteres",
      }),
    sellprice: z
      .string({ invalid_type_error: "El nombre debe ser de tipo STRING" })
      .max(25, {
        message: "El precio tiene que tener como MÁXIMO 6 caracteres",
      }),
  });

export function productValidator(data){
return productsSchema.safeParse(data)

}