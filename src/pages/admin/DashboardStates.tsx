import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetSuppliesStatisticsQuery } from "@/redux/features/supply/supplyApi";
type TStatistics = {
  totalDonation: number;
  _id: string;
  totalItem: number;
};
const DashboardStates = () => {
  const { data } = useGetSuppliesStatisticsQuery(undefined);
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="relative overflow-hidden  shadow">
          <div className="px-6 py-10">
            <div className="flex items-center">
              <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                {data?.totalDonationSum}
              </h3>
              <span className="ml-3 text-base font-medium capitalize">
                Total Supply Amount
              </span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden  shadow">
          <div className="px-6 py-10">
            <div className="flex items-center">
              <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                {data?.statistics.length}
              </h3>
              <span className="ml-3 text-base font-medium capitalize">
                Number of Supply Category
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Category</TableHead>
              <TableHead>Total Supply</TableHead>
              <TableHead>Total Supply</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.statistics?.map((item: TStatistics, i: string) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{item._id}</TableCell>
                <TableCell>{item.totalItem}</TableCell>
                <TableCell>{item.totalDonation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardStates;
