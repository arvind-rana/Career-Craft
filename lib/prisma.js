import { PrismaClient } from '../lib/generated/prisma';


 
/*const globalForPrisma = globalThis;
 export const db = globalThis.prisma || new PrismaClient();


 if(process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
 }*/




const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}


 //globablThis.prisma:  this global variable prisma ensure that the prisma client instance is reused across hot reloads during development 
 //without this each time your application reload, a new instance  of the prisma client would be created  potentiall leading 
 // to connection issue.