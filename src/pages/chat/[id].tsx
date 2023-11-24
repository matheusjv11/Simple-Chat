import { useRouter } from 'next/router'
import MainChat from '@/templates/MainChat'
import Home from '@/templates/Home'
import { store } from '@/store'

export default function Chat() {
  const router = useRouter()
  const chatId = router.query.id as string
  const chat = store.getState().chats.userChats[chatId]

  if (!chatId) {
    return <></>
  }

  return (
    <Home>
      <MainChat chatId={chat.id} />
    </Home>
  )
}
