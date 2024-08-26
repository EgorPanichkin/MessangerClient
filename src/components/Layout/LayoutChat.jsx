import { LogoutOutlined } from "@ant-design/icons"
import { Button, Layout } from "antd"
import { Outlet, useNavigate } from "react-router-dom"
import { ChatForm } from "../ChatForm/ChatForm"
import { useConnect } from "../../lib/useConnect/useConnect"
import { UserList } from "../UserList/UserList"
import { useEffect } from "react"

const { Header, Footer, Sider, Content } = Layout

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  color: "#fff",
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#2c2c2c",
}

const contentStyle = {
  height: "60vh",
  overflowY: "scroll",
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#2c2c2ce5",
}

const siderStyle = {
  textAlign: "center",
  lineHeight: "50px",
  color: "#fff",
  backgroundColor: "#2c2c2c",
}

const footerStyle = {
  textAlign: "center",
  paddingRight: "100px",
  color: "#fff",
  backgroundColor: "#2c2c2c",
}

const layoutStyle = {
  minHeight: "100vh",
  overflow: "hidden",
}

export const LayoutChat = () => {
  const nav = useNavigate()
  const { connect } = useConnect()
  const params = Object.fromEntries(new URLSearchParams(document.location.search))

  useEffect(() => {
    connect.emit("join", params)
  }, [])

  const handleLogout = async () => {
    await connect.emit("disconnect-user", params)
    nav("/")
  }

  return (
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        <UserList />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <p>Ardager Chat</p>
          <Button onClick={handleLogout}>
            LogOut <LogoutOutlined />
          </Button>
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer style={footerStyle}>
          <ChatForm user={params.name} room={params.room} />
        </Footer>
      </Layout>
    </Layout>
  )
}
