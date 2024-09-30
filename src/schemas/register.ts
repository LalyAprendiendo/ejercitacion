import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo STRING",
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(25, {
      message: "El nombre tiene que tener como MÁXIMO 25 caracteres",
    }),
  email: z
    .string({ required_error: "La propiedad email es obligatoria" })
    .email(),

  password: z.string({
    invalid_type_error: "El nombre debe ser de tipo STRING",
    required_error: "El nombre es requerido",
  }),
});

export function registerValidator(data) {
  return registerSchema.safeParse(data);
}