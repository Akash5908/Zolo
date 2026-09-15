import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:4001', {
      autoConnect: false,
      transports: ['websocket'],
      withCredentials: true,
    })
  }
  return socket
}

export const connectSocket = (token: string): Socket => {
  const s = getSocket()
  s.auth = { token }
  if (!s.connected) s.connect()
  return s
}

export const disconnectSocket = () => {
  if (socket?.connected) {
    socket.disconnect()
  }
}

export default getSocket
