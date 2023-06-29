'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';

import data from '../data/idf_counts_buckets.json';

var chartdata = data;

export default function IdfBuckets() {
    return (
      <Card>
        <Title>IDF Terms</Title>
        <Text>Approximatley 300k plus terms identified from TF-IDF analysis. IDF scores that are low, 
            say a 1 or 4, mean the terms were common and not good ways of distinguishing between documents 
            or studies, while a higher IDF means it is a unique term that can distinguish it. To display this information
            more efficency, have created some buckets of IDF scores to them perform counts of how many values were
            good for distinguishing, high number, buckets 10-11, 11-12, 12+, versus lower. </Text>
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
