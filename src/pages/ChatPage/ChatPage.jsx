import { useEffect, useState } from "react"
import { useConnect } from "../../lib/useConnect/useConnect"
import style from "./ChatPage.module.scss"

const ChatPage = () => {
  const { connect } = useConnect()
  const [messageList, setMessageList] = useState([])
  const params = Object.fromEntries(new URLSearchParams(document.location.search))

  useEffect(() => {
    connect.on("message", (data) => {
      setMessageList((prev) => [...prev, ...data])
    })
  }, [])

  return (
    <div className={style.chatWrapper}>
      {messageList?.map((message, index) => {
        return (
          <div
            className={style.message}
            key={index}
            style={{
              backgroundColor: params.name === message.user ? "#6fe7c9" : "#6fa7e7",
              margin: params.name === message.user ? "0px auto 10px 0px" : "0px 0px 10px auto",
            }}
          >
            {message.message}
          </div>
        )
      })}
    </div>
  )
}

export default ChatPage
