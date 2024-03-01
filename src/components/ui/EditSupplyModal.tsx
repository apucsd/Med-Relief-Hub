import { ChangeEvent, useState } from "react";
import { Button } from "./button";
import { FileEdit } from "lucide-react";
import { Modal } from "antd";
import SupplyForm from "../forms/SupplyForm";
import { TSupply } from "@/types/type";
import getImageURL from "@/lib/getImageURL";
import { useUpdateSupplyMutation } from "@/redux/features/supply/supplyApi";
import { toast } from "sonner";

const EditSupplyModal = ({ id }: { id: string }) => {
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [updateSupply] = useUpdateSupplyMutation();

  const onFinish = async (values: Partial<TSupply>) => {
    if (image) {
      values.image = image;
    }
    const updateInfo = {
      id: id,
      data: values,
    };

    const res = await updateSupply(updateInfo);

    setIsModalOpen(false);
    if ("data" in res && res.data && res.data.success) {
      toast.success("A Supply is successfully updated");
    }
  };

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const imageURL = await getImageURL(file as File);
    console.log(imageURL);
    setImage(imageURL);
  };
  return (
    <div>
      <Button onClick={showModal} variant="ghost">
        <FileEdit className="size-4 text-primary" />
      </Button>
      <Modal
        footer={null}
        okButtonProps={{ style: { backgroundColor: "#03ACF2" } }}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div className="w-full max-w-lg mx-auto">
          <SupplyForm
            required={false}
            onFinish={onFinish}
            handleImage={handleImage}
          />
        </div>
      </Modal>
    </div>
  );
};

export default EditSupplyModal;
