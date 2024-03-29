import {
  useDeleteSuppliesMutation,
  useGetSuppliesQuery,
} from "@/redux/features/supply/supplyApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TSupply } from "@/types/type";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { toast } from "sonner";
import EditSupplyModal from "@/components/ui/EditSupplyModal";
const { confirm } = Modal;

const AllSupplies = () => {
  const { data } = useGetSuppliesQuery(undefined);
  const [deleteSupply] = useDeleteSuppliesMutation();

  const showDeleteConfirm = (id: string) => {
    confirm({
      title: "Are you sure delete this?",
      icon: <ExclamationCircleFilled />,
      content: "This will delete from the database",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteSupply(id);

        toast.success("A supply is deleted successfully");
      },
    });
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent supplies post.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.result?.map((item: TSupply) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell className=" flex text-end justify-end mx-auto">
                <EditSupplyModal id={item._id as string} />

                <Button
                  onClick={() => showDeleteConfirm(item._id as string)}
                  variant="ghost"
                >
                  <Trash2 className="size-4 text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="text-red-500">
              Total supplies post
            </TableCell>
            <TableCell className="text-right">{data?.result?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default AllSupplies;
