import { object, string } from "zod"
import * as argon from "argon2"
import { env } from "@/env"
 
export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export async function hashPassword(password:string){
  return await argon.hash(password, {
    secret: Buffer.from(env.ARGON_SECRET),
  })
}

export async function verifyPassword(password:string, hashedPassword:string){
  return await argon.verify(password, hashedPassword)
}