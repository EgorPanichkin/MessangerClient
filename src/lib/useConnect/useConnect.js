import { io } from "socket.io-client"
import { create } from "zustand"

export const useConnect = create((set) => ({
  connect: io.connect("http://localhost:5000"),
}))
