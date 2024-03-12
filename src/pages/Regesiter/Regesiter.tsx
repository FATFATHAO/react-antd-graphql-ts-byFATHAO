import { useMutation, useQuery } from "@apollo/client";
import { Button, Checkbox, Form, Input, Select } from "antd"
import { useForm } from "antd/es/form/Form";
import { ADD_USER, GET_USER } from "../../GraphQl/GraphQL-Query";
import { useState } from "react";
import { Option } from "antd/es/mentions";
import "../Regesiter/regesiterStyle.css"

interface User {
    email: string;
    password: string;
    confirm: string;
    nickname: string;
    prefix: string;
    phone: string;
    gender: string;
}

interface InputUser {
    email: string;
    password: string;
    nickname: string;
    phone: string;
    gender: string;
}

const formItemLayout = {
    labelCol: {//左边文字
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {//右边输入框
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 3,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 0,
        },
    },
};

const Regesiter = () => {

    const [email, setEmail] = useState<string | null>();

    document.title = "注册界面";
    const [form] = Form.useForm();
    const [add] = useMutation(ADD_USER);
    const { data } = useQuery(GET_USER, {
        skip: !email,
        variables: { email },
    });

    const onFinish = async (values: User) => {
        console.log("注册进行中");
        console.log(data.getUserByEmail);
        if (!data.getUserByEmail) {
            add({
                variables: {
                    createUserInput: {
                        email: values.email,
                        password: values.password,
                        nickname: values.nickname,
                        phone: values.phone,
                        gender: values.gender,
                    },
                },
            });
            alert("注册成功");
            window.location.href = '/';
        }
        else {
            alert("该用户名被注册过了");
        }
    };

    const onReset = () => {
        form.resetFields();
    }

    return (
        <div className="Board">
            <Form
                onFinish={onFinish}
                form={form}
                {...formItemLayout}
                name="register"
            >
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true, message: "请输入你的邮箱！" },
                    () => ({
                        validator(_, value) {
                            if (/[0-9 a-z A-Z]*@[0-9 a-z A-Z]*.[a-z]*/.test(value)) {
                                return Promise.resolve();
                            }
                            else {
                                return Promise.reject("请输入邮箱账号!!!!!");
                            }
                        }
                    })
                    ]}
                >
                    <Input
                        onChange={(e: any) => {
                            const email = e.target.value;
                            setEmail(email);
                        }}
                    ></Input>
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: "请输入你的密码！" }]}
                    hasFeedback
                >
                    <Input.Password></Input.Password>
                </Form.Item>
                <Form.Item
                    label="重复密码"
                    name="reinputPassword"
                    rules={[{ required: false, message: "请重复一遍你的密码！" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (value && getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            else {
                                return Promise.reject("两次输入的密码不一致!!!!!");
                            }
                        }
                    })
                    ]}
                    hasFeedback
                >
                    <Input.Password></Input.Password>
                </Form.Item>
                <Form.Item
                    label="昵称"
                    name="nickname"
                    rules={[
                        {
                            required: true,
                            message: "请输入你的昵称",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="手机号"
                    name="phone"
                    rules={[{ required: true, message: "请输入你的手机号" }]}
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="性别"
                    name="gender"
                    rules={[{ required: true, message: "请选择你的性别" }]}
                >
                    <Select placeholder="请选择你的性别">
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[{
                        validator: (_, value) => {
                            if (value) {
                                return Promise.resolve();
                            }
                            else {
                                return Promise.reject("必须要同意协议才能进行注册");
                            }
                        }
                    }]}
                    {...tailFormItemLayout}
                >
                    <Checkbox
                        style={{ width: 4000,marginLeft:120 }}
                    >
                        我已经阅读并了解<a href="">本站协议</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <div className="btn-nav">
                        <Form.Item>
                            <Button type="primary" htmlType="submit">注册</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="reset" onReset={onReset}>重置</Button>
                        </Form.Item>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Regesiter;