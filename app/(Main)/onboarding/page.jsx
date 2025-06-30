import { getUserOnboardingStatus } from "@/action/user";
import { redirect } from "next/dist/server/api-utils";
import OnboardingForm from "./_components/onboarding-form";
//import { redirect } from "next/navigation";


const { industries } = require("@/data/industries")


const OnboardingPage = async () => {
    const {isOnboarded} = await getUserOnboardingStatus();
   // if(isOnboarded)
    //{
         //redirect("/dashboard");
    //}
    return (
        <main>
           <OnboardingForm industries={industries}/>
        </main>
     )
}

export default OnboardingPage;
