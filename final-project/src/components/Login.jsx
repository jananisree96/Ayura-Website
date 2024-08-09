import React, { useState } from "react";
import { Modal, Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

const LoginModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleFinish = (values) => {
    console.log("Login form submitted:", values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        Open Login
      </Button>
      <Modal
        title={
          <Title level={4} className="text-center">
            Login
          </Title>
        }
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <Form
          name="login"
          onFinish={handleFinish}
          layout="vertical"
          className="space-y-4"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default LoginModal;
