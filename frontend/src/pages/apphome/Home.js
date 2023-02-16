import React from "react";

import WelcomeBanner from 'pages/apphome/components/WelcomeBanner';
import StatsBar from 'pages/apphome/components/StatsBar';
import ProgressProjects from 'pages/apphome/components/ProgressProjects';
import StatsListReport from 'pages/apphome/components/StatsListReport';
import LineChartExample from 'pages/apphome/components/LineChartExamples'
import BarChartExample from 'pages/apphome/components/BarChartExample';
import InvoicesCard from 'pages/apphome/components/InvoicesCard';
import AppsCard from 'pages/apphome/components/AppsCard';
import ToolsCard from 'pages/apphome/components/ToolsCard';
import Footer from 'layouts/Footer';

export default function Home() {
  return (
    <div>
        <StatsBar />
        <div className="row g-4 mb-4">
            <LineChartExample/>
            <BarChartExample/>
        </div>

        <div className="row g-4 mb-4">
            <ProgressProjects />
            <StatsListReport />
        </div>

        <div className="row g-4 mb-4">
            <InvoicesCard/>
            <AppsCard/>
            <ToolsCard/>
        </div>
    </div>
  );
}
