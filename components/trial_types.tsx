'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import data from '../data/types_year.json';

const chartdata = data;

export default function TrialTypes() {
  return (
    <Card className="mt-8">
      <Title>Trial Types</Title>
      <Text>Interventional vs Observational</Text>
      <AreaChart
        className="mt-4 h-80"
        data={chartdata}
        categories={['Interventional', 'Observational']}
        index="year"
        colors={['indigo', 'fuchsia']}
      />
    </Card>
  );
}
