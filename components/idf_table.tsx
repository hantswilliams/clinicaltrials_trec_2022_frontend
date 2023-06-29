import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    Badge,
  } from "@tremor/react";
  
  import data2 from '../data/idf_sample_by_bucket.json';
  
  const data = data2;
  
  export default function IdfTable() {
    return (
      <Card>
        <Title>IDF Table of Example Terms</Title>
        <Text> Terms that are that the beginning of the table, found in buckets 0-3, are the worst terms and
             are not good at distinguishing between documents or studies. The terms at the end of the table,
            found in buckets 10-11, 11-12, 12+, are the best terms, those that are good for 
            distinguishing between documents or studies. The purpose of this table is to just provide examples. 
        </Text>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>IDF Bucket</TableHeaderCell>
              <TableHeaderCell>Term Example</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.terms}>
                <TableCell>{item.idf_bin}</TableCell>
                <TableCell>
                  <Text>{item.terms}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }
  