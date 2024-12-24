"use server";

import { hashPassword } from "@/server/auth/validation";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";

export async function isAdminPresent(){
  const user = await db.select().from(users);
  
  if(user.length === 0){
    return false;
  }
  const adminUser = user.find(u=> u.role === "admin");
  return adminUser !== undefined;
}

export async function createAdminUser(){
  const user = await db.insert(users).values({
    name: "Frontendfixer",
    email: "admin@frontendfixer.in",
    hashedPassword: await hashPassword("Pass@1234"),
    role: "admin",
    emailVerified: new Date(),
    image:"",
  });

  return user;
}