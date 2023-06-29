'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import data from '../data/trials_year.json';

const chartdata = data;

export default function TrialYears() {
  return (
    <Card className="mt-8">
      <Title>Year by Year Counts</Title>
      <Text>Total number of clinical trials registered for each year</Text>
      <AreaChart
        className="mt-4 h-80"
        data={chartdata}
        categories={['count']}
        index="year"
        colors={['indigo', 'fuchsia']}
      />
    </Card>
  );
}
