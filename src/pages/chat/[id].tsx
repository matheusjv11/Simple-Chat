import { useRouter } from 'next/router'
import MainChat from '@/templates/MainChat'
import Home from '@/templates/Home'
import { ChatService } from '@/services/ChatService'

export default function Chat() {
  const router = useRouter()
  const chatId = router.query.id as string
  const chat = ChatService.getChatById(chatId)

  if (!chat) {
    return <></>
  }

  return (
    <Home>
      <MainChat chat={chat} />
    </Home>
  )
}
