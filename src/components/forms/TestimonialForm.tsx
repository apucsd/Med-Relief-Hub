/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input } from "antd";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TestimonialForm = ({
  onFinish,
  handleImage,
}: {
  onFinish: any;
  handleImage: any;
}) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Form
        layout="vertical"
        name="testimonials"
        onFinish={onFinish}
        onFinishFailed={() => toast.error("Please fill in all required fields")}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Designation"
          name="designation"
          rules={[{ required: true, message: "Please enter your designation" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Testimonial"
          name="testimonial"
          rules={[{ required: true, message: "Please enter your testimonial" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please enter image" }]}
        >
          <Input onChange={handleImage} type="file" />
        </Form.Item>
        <Form.Item>
          <Button variant={"default"} type="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TestimonialForm;
