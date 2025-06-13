import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(4, 'Username minimal 4 karakter'),
  password: z
    .string()
    .min(8, 'Password minimal 8 karakter')
    .regex(/[A-Z]/, 'Password harus mengandung huruf kapital')
    .regex(/[a-z]/, 'Password harus mengandung huruf kecil')
    .regex(/[0-9]/, 'Password harus mengandung angka')
    .regex(/[@#$!%*?&]/, 'Password harus mengandung simbol unik (@# dll)'),
});
