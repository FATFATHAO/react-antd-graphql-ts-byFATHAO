import { Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form";



const Regesiter = () => {

    let loginanly: string;

    const onFinish = (values: any) => {
        console.log(values);
        loginanly = values.password;
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
                    hasFeedback
                >
                    <Input></Input>
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
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="邮箱"
                    name="e-mail"
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
                    <Input></Input>
                </Form.Item>
                <div className="btn-nav">
                    <Form.Item>
                        <Button type="primary" htmlType="submit">注册</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="reset" onReset={onReset}>重置</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default Regesiter;