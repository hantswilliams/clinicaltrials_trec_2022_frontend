'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';

import data from '../data/idf_counts_buckets.json';

var chartdata = data;

export default function IdfBuckets() {
    return (
      <Card>
        <Title>IDF Terms</Title>
        <Text>Approximatley 300k plus terms identified from IDF analysis. For interpretation, IDF scores that are low, 
            say a 1 or 4, mean the terms were common, and not good at distinguishing between documents 
            or studies. While a higher IDF means it is a unique term, that can distinguish between docs. 
            To display this information more efficency, I have created some buckets to group IDF scores, and then performed 
            counts of how many IDF terms fall into each bucket. Low is bad distinguisher. High is good distinguisher. </Text>
        <Flex className="mt-6">
            <Text>IDF Bin</Text>
            <Text className="text-right">Term Counts</Text>
        </Flex>
        <BarList
            data={chartdata}
            valueFormatter={(number: number) =>
                Intl.NumberFormat('us').format(number).toString()
            }
            className="mt-2"
        />

    </Card>
  );
}
