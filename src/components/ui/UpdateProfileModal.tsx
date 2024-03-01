/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Form, Input, Modal, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Button } from "./button";
import React from "react";
import { useUpdateUserMutation } from "@/redux/features/auth/authApi";
import { useAppSelector } from "@/redux/hook";
import { toast } from "sonner";
type TModalProps = {
  isModalOpen: boolean | undefined;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const UpdateProfileModal = ({ isModalOpen, setIsModalOpen }: TModalProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const [updateUser] = useUpdateUserMutation();
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async (values: any) => {
    const updatedData = {
      email: user?.email,
      data: values,
    };
    const res: any = await updateUser(updatedData);
    if (res?.data?.success) {
      toast.success("User profile updated successfully");
    }
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        style={{}}
        footer={null}
        okButtonProps={{ style: { backgroundColor: "#03ACF2" } }}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          onFinish={onFinish}
          layout="vertical"
          className="w-full"
          name="form"
        >
          <Row gutter={10}>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label={
                  <label style={{ color: "#374151" }}>Your Full Name</label>
                }
                name="name"
                rules={[{ required: true, message: "Please enter full name" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label={<label style={{ color: "#374151" }}>Your Address</label>}
                name="address"
                rules={[{ required: true, message: "Please enter address" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label={
                  <label style={{ color: "#374151" }}>Your Occupation</label>
                }
                name="occupation"
                rules={[
                  { required: true, message: "Please enter your occupation" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <Form.Item
                label={
                  <label style={{ color: "#374151" }}>Your Phone No.</label>
                }
                name="number"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label={<label style={{ color: "#374151" }}>Biography</label>}
            name="biography"
            rules={[{ required: true, message: "Please enter biography" }]}
          >
            <TextArea
              style={{ height: 100, resize: "none" }}
              placeholder="Please write your  biography"
            />
          </Form.Item>

          <Form.Item>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateProfileModal;
