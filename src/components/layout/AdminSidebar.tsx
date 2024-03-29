import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
const { Sider } = Layout;
import {
  HomeOutlined,
  FileDoneOutlined,
  EditOutlined,
  OrderedListOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";

// import { Link } from "react-router-dom";
const AdminSidebar = () => {
  const items: MenuProps["items"] = [
    {
      key: "dashboard",
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
      icon: React.createElement(HomeOutlined),
    },
    {
      key: "all-supplies",
      label: "All Supplies",
      icon: React.createElement(OrderedListOutlined),
      children: [
        {
          key: "supplies",
          label: <NavLink to="/dashboard/supplies">Supplies List</NavLink>,
          icon: React.createElement(FileDoneOutlined),
        },
        {
          key: "create-supply",
          label: <NavLink to="/dashboard/create-supply">Post Supply</NavLink>,
          icon: React.createElement(EditOutlined),
        },
      ],
    },
    {
      key: "create-testimonial",
      label: (
        <NavLink to="/dashboard/create-testimonial">Create Testimonial</NavLink>
      ),
      icon: React.createElement(PlusCircleFilled),
    },
  ];
  return (
    <Sider breakpoint="lg" theme="light" collapsedWidth="0">
      <div className="demo-logo-vertical h-20">
        <Link
          to="/"
          className="flex ms-4  items-center h-full  text-2xl font-black"
        >
          <span className="flex gap-1 justify-center items-center bold">
            <img className="size-8" src="logo.svg" alt="" />
            MedReliefHub
          </span>
        </Link>
      </div>
      <Menu
        theme="light"
        mode="inline"
        className=""
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default AdminSidebar;
