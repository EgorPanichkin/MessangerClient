import { Button, Form, Input } from "antd"
import { useConnect } from "../../lib/useConnect/useConnect"

export const ChatForm = ({ user, room }) => {
  const [form] = Form.useForm()

  const { connect } = useConnect()

  const handleSubmit = ({ message }) => {
    connect.emit("send-message", { message: message, room: room, name: user })
    form.resetFields()
  }

  return (
    <Form form={form} onFinish={handleSubmit} layout="inline" style={{ width: "100%", flexWrap: "nowrap" }}>
      <Form.Item name={"message"} style={{ width: "90%" }}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  )
}
