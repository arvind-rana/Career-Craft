import React from 'react'
import { getUserOnboardingStatus } from "@/action/user";
//import { redirect } from "next/dist/server/api-utils";
import { redirect } from 'next/navigation'
//import { getIndustryInsights } from '@/action/dashboard';
import { getIndustryInsights } from '@/action/dashboard';
import DashboardView from './_components/dashboard-view';


// This is a server component
const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
};

export default IndustryInsightsPage
