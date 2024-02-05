import { Button, Checkbox, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form";



const Login = () => {

    const onFinish = (values: any) => {
        console.log(values);
    }

    const [form] = useForm();

    const onReset = () => {
        form.resetFields();
    }

    return (
        <div className="Board">
            <Form
                onFinish={onFinish}
            >
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: "请输入你的账号！" }]}
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: "请输入你的密码！" }]}
                >
                    <Input></Input>
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