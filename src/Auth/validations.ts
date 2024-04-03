import { z } from "zod";

export const name = z.string().max(256, { message: 'El nombre debe tener como máximo 256 caracteres' }).min(1, { message: 'El nombre es requerido' });

export const email = z.string().email({ message: 'El formato de correo electrónico no es válido' }).min(1, { message: 'El correo electrónico es requerido' }).transform((str) => str.toLowerCase().trim());

export const invitationToken = z.string().min(21, { message: 'El token de invitación debe tener al menos 21 caracteres' });

export const password = z.string()

export const Signin = z.object({
  email,
  password,
});

export const ChangePassword = z.object({
  email,
  password,
  new_password: password
});
