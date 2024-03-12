import { useQuery } from "@apollo/client";
import { Button, Checkbox, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { GET_USER } from "../../GraphQl/GraphQL-Query";

interface userInfo {
    username: string;
    password: string;
    remember: boolean;
}
interface User {
    email: string;
    password: string;
}

const Login = () => {
    document.title = "登陆界面";
    const [user, setUser] = useState<User>({ email: "", password: "" });
    const { data } = useQuery(GET_USER, {
        skip: !user.email,
        variables: { email: user.email },
    });

    const onFinish = (values: userInfo) => {
        console.log(data);
        console.log(user);
        if (data.getUserByEmail) {
            const currUser = data.getUserByEmail;
            if (
                currUser.email === values.username &&
                currUser.password === values.password
            ) {
                alert("登陆成功");
            } else {
                alert("登陆失败");
            }
        }
        else {
            alert("账号不存在");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
        alert('登录失败');
    }

    const [form] = useForm();

    const onReset = () => {
        form.resetFields();
    }

    return (
        <div className="Board">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: "请输入你的账号！" }]}
                >
                    <Input
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                        }}
                    ></Input>
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: "请输入你的密码！" }]}
                >
                    <Input.Password
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                    ></Input.Password>
                </Form.Item>
                <div className="board-rec">
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>记住账号密码</Checkbox>
                    </Form.Item>
                </div>
                <div className="btn-nav">
                    <Form.Item>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" onReset={onReset}>重置</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default Login;