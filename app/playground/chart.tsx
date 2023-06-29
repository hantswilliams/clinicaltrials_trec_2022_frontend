'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

const data = [{"year":1999,"Interventional":742,"Observational":314},{"year":2000,"Interventional":367,"Observational":696},{"year":2001,"Interventional":1473,"Observational":299},{"year":2002,"Interventional":1061,"Observational":314},{"year":2003,"Interventional":3331,"Observational":252},{"year":2004,"Interventional":2955,"Observational":206},{"year":2005,"Interventional":11166,"Observational":1617},{"year":2006,"Interventional":9299,"Observational":1603},{"year":2007,"Interventional":10465,"Observational":2040},{"year":2008,"Interventional":14355,"Observational":3101},{"year":2009,"Interventional":13443,"Observational":3280},{"year":2010,"Interventional":12728,"Observational":3503},{"year":2011,"Interventional":13013,"Observational":3618},{"year":2012,"Interventional":14444,"Observational":3710},{"year":2013,"Interventional":15362,"Observational":3287},{"year":2014,"Interventional":17314,"Observational":3889},{"year":2015,"Interventional":18007,"Observational":3921},{"year":2016,"Interventional":20229,"Observational":5111},{"year":2017,"Interventional":20809,"Observational":5669},{"year":2018,"Interventional":22073,"Observational":5952},{"year":2019,"Interventional":23539,"Observational":6815},{"year":2020,"Interventional":26326,"Observational":8766},{"year":2021,"Interventional":26604,"Observational":8873},{"year":2022,"Interventional":28089,"Observational":8446},{"year":2023,"Interventional":10073,"Observational":3342}]

export default function Example() {
  return (
    <Card className="mt-8">
      <Title>Trial Types</Title>
      <Text>Interventional vs Observational</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Interventional', 'Observational']}
        index="year"
        colors={['indigo', 'fuchsia']}
      />
    </Card>
  );
}
