import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Login = () => {
  return (
    <div className="container grid grid-cols-12  justify-center items-center  min-h-screen">
      <div className="md:col-span-7 col-span-12">
        <img className="w-full" src="/public/login.svg" alt="" />
      </div>
      <Tabs
        defaultValue="account"
        className="md:col-span-5 col-span-12 w-full  text-center max-w-md mx-auto"
      >
        <TabsList className="w-full">
          <TabsTrigger
            className="font-semibold text-primary w-full"
            value="account"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            className="font-semibold text-primary w-full"
            value="password"
          >
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent
          style={{ minHeight: "400px" }}
          className="border p-4"
          value="account"
        >
          <LoginForm />
        </TabsContent>
        <TabsContent
          style={{ minHeight: "400px" }}
          className="border p-4"
          value="password"
        >
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
