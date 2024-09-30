import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({ required_error: "La propiedad email es obligatoria" })
    .email(),

  password: z.string({
    invalid_type_error: "El nombre debe ser de tipo STRING",
    required_error: "El nombre es requerido",
  }),
});

export function loginValidator(data) {
  return loginSchema.safeParse(data);
}