"use server";

import { marketOutlook } from "@/lib/generated/prisma";
//import { marketOutlook } from "@/lib/generated/prisma";
//import { DemandLevel } from "@/lib/generated/prisma";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { select } from "@radix-ui/react-select";
//import { revalidatePath } from "next/cache";
//import { success } from "zod/v4/core";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    if (!user) throw new Error("User not found");
  
    try {
      // Start a transaction to handle both operations
      const result = await db.$transaction(
        async (tx) => {
          // First check if industry exists
          let industryInsight = await tx.industryInsight.findUnique({
            where: {
              industry: data.industry,
            },
          });
  
          // If industry doesn't exist, create it with default values
          if (!industryInsight) {
            const insights = await generateAIInsights(data.industry);
  
            industryInsight = await db.industryInsight.create({
              data: {
                industry: data.industry,
                ...insights,
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
              },
            });
          }


          //update user
          const updateUser = await tx.user.update({
            where: {
                id: user.id,

            },
            data: {
                industry : data.industry,
                experience : data.experience,
                bio: data.bio,
                skills:  data.skills,
            },
          });
          return {updateUser, industryInsight};
        },
        {
          timeout: 10000,
        }
        );
        return {sucess: true, ...result}
    } catch(error) {
       console.error("Error updating user and industry:", error);
       throw new Error("failed to update profile");
    }
    
}


export async function getUserOnboardingStatus() {
    
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");
      
        const user = await db.user.findUnique({
          where: { clerkUserId: userId },
        });
      
        if (!user) throw new Error("User not found");
        try{
          const user = await db.user.findUnique({
            where: {
                clerkUserId : userId,
            },
            select: {
                industry: true,
            },
          })

          return {
            isOnboarded: !!user?.industry,
          };
        } catch(error) {
            console.error("Error cheking onboarding status:", error.message);
            throw new Error("failed to check onboarding status");
        }
    }
      
