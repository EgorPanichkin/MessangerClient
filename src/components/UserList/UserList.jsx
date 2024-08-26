import { useEffect, useState } from "react"
import { useConnect } from "../../lib/useConnect/useConnect"

export const UserList = () => {
  const [users, setUsers] = useState([])
  const { connect } = useConnect()

  useEffect(() => {
    connect.on("users", (data) => {
      setUsers(data.users)
    })
    connect.on("disconnect-user", (data) => {
      setUsers(data.users)
    })
  }, [])

  return (
    <div>
      {users?.map((user) => {
        return <div key={user.id}>{user.name}</div>
      })}
    </div>
  )
}
