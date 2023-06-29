import { Title, Text } from '@tremor/react';
export const dynamic = 'force-dynamic';

export default async function IndexPage() {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Clinical Trial TREC 2022 Data</Title>
      <Text>
          <p> This is a VERY preliminary analysis, basic processing of the data </p>  
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://www.trec-cds.org/2023.html"
            target="_blank"
            rel="noreferrer"
          > 
            found here 
          </a>
      </Text>

    </main>
  );
}
