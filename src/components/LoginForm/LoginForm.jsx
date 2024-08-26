import { Button, Form, Input } from "antd"
import style from "./LoginForm.module.scss"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const [form] = Form.useForm()
  const nav = useNavigate()

  const handleSubmit = (value) => {
    nav(`/chat?name=${value.name}&room=${value.room}`)
  }

  return (
    <Form form={form} layout="vertical" style={{ color: "#ffff" }} className={style.form} onFinish={handleSubmit}>
      <Form.Item name="name" label="User name" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="room" label="Room name" rules={[{ required: true, message: "Please input your room name!" }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
