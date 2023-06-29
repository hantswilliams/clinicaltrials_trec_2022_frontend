'use client';

import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import data from "../data/trials_sources_total.json";

const chartdata = data

export default function TrialTypesTotals() {
  return (
    <Card>
      <Title>Leading Clinical Trial Sponsors: Top 100</Title>
      <Subtitle>
        This shows the top clinical trial sponsors across all years that sponsor the most research
      </Subtitle>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="source"
        categories={["count"]}
        colors={["blue"]}
        yAxisWidth={48}
      />
    </Card>
  );
}
