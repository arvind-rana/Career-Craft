"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // ✅ CORRECT
import { Input } from "@/components/ui/input"
import { onboardingSchema } from "@/app/lib/schema";
import { useEffect, useState } from "react";
//import { Router } from "lucide-react";
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import useFetch from "@/hooks/use-fetch";
import { updateUser } from "@/action/user";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const OnboardingForm = ({ industries }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();

  const {
     loading: updateLoading,
     fn: updateUserFn,
     data: updateResult,
  } = useFetch(updateUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

  const onSubmit = async(values) => {
         try{
            const formattedIndustry = `${values.industry}-${values.subIndustry.toLowerCase().replace(/ /g, "-")}`;
             
            await updateUserFn({
              ...values,
              industry : formattedIndustry,
            });
         }catch(error) {
            console.log("onboarding erroe:", error)
         }
  }

  useEffect(() => {
         if(updateResult?.success && !updateLoading) {
            toast.success("profile completed succefully");
            router.push('/dashboard');
            router.refresh();
         }
  }, [updateResult, updateLoading]);

  const watchIndustry = watch("industry")
  return (
    <div className="flex item-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className="gradient-titel text-4xl">
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            Select your industry to get personalized career insight and
            recommendation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
                <Label htmlFor="industry">industry</Label>
            <Select
             key={selectedIndustry?.id || "no-industry"}
             onValueChange={(value) => {
                setValue("industry", value);
                setSelectedIndustry(
                    industries.find((ind) => ind.id == value)
                );
                setValue("subIndustry", "")
             }}>
              <SelectTrigger id="industry">
                <SelectValue placeholder="select an industry" />
              </SelectTrigger>
              <SelectContent>
              {
                industries.map((ind) =>{
                  return (
                    <SelectItem value={ind.id} key={ind.id}>
                        {ind.name}
                    </SelectItem>
                  )
                })
              }
            
              </SelectContent>
            </Select>
            {
                errors.industry && (
                    <p className="text-sm text-red-500">
                        {errors.industry.message}
                    </p>
                )
            }
            </div>
             {
                watchIndustry && (
                    <div className="space-y-2">
                <Label htmlFor="subIndustry">specialization</Label>
            <Select onValueChange={(value) =>  setValue("subIndustry", value)}>
              <SelectTrigger id="subIndustry">
                <SelectValue placeholder="select an industry" />
              </SelectTrigger>
              <SelectContent>
              {
                selectedIndustry?.subIndustries.map((ind) =>{
                  return (
                    <SelectItem value={ind} key={ind}>
                        {ind}
                    </SelectItem>
                  )
                })
              }
            
              </SelectContent>
            </Select>
            {
                errors.industry && (
                    <p className="text-sm text-red-500">
                        {errors.subIndustry.message}
                    </p>
                )
            }
            </div>
                )
             }


           <div className="space-y-2">
                <Label htmlFor="subIndustry">specialization</Label>
               <Input 
               id="experience"
               type="number"
               min="0"
               max="50"
               placeholder="enter year of experience"
               {...register("experience")}
               />
            {
                errors.experience && (
                    <p className="text-sm text-red-500">
                        {errors.experience.message}
                    </p>
                )
            }
            </div>

            <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
               <Input 
               id="skills"
               placeholder="e.g., python, javascript, projec managemetn"
               {...register("skills")}
               />
               <p className="text-sm text-muted-foreground">
                seperated multiple skills with commas
               </p>

            {
                errors.skills && (
                    <p className="text-sm text-red-500">
                        {errors.skills.message}
                    </p>
                )
            }
            </div>
            <div className="space-y-2">
                <Label htmlFor="biodata">Biodata</Label>
               <Textarea 
               id="bio"
               
               placeholder="Tell about yourself"
               {...register("bio")}
               />
            {
                errors.bio && (
                    <p className="text-sm text-red-500">
                        {errors.bio.message}
                    </p>
                )
            }
            </div>
            <Button type="submit" className="w-full" disabled = {updateLoading}>
                {  updateLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                     Saving...
                    </>
                ): (
                    "complete profile"
                )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
