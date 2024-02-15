import { EyeIcon, MailIcon } from "lucide-react";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const LoginForm = () => {
  const [loginUser, { isError, isLoading, isSuccess }] = useLoginUserMutation();
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      email: "apu@gmail.com",
      password: "1111",
    },
  });
  const onSubmit = (data: FieldValues) => {
    loginUser(data);
  };
  if (isError) {
    toast.error("Email and password is not valid");
    reset();
  }
  if (isSuccess) {
    toast.success("User Login successful");
  }
  console.log({ isError, isSuccess });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="mb-10">
        <h3 className="text-2xl font-extrabold">Sign in</h3>
        <p className="text-sm mt-4">Welcome ! Please Login with your account</p>
      </div>
      <div>
        <div className="relative flex items-center">
          <input
            {...register("email")}
            name="email"
            type="email"
            required
            className="w-full text-sm border-b px-4 py-3 focus-visible:outline-none"
            placeholder="Enter your email address"
          />
          <MailIcon className="w-[18px] text-primary h-[18px] absolute right-4" />
        </div>
      </div>
      <div>
        <div className="relative flex items-center">
          <input
            {...register("password")}
            name="password"
            type="password"
            required
            className="w-full text-sm border-b px-4 py-3 focus-visible:outline-none"
            placeholder="Enter password"
          />
          <EyeIcon className="w-[18px] h-[18px] text-primary absolute right-4" />
        </div>
      </div>

      <div className="!mt-10">
        <Button type="submit" className="w-full">
          {isLoading ? "Logging" : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
