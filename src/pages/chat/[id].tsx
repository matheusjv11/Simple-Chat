import { useRouter } from 'next/router'
import MainChat from '@/templates/MainChat'
import Home from '@/templates/Home'
import { useEffect } from 'react'
import { ChatService } from '@/services/ChatService'

export default function Chat() {
  const router = useRouter()
  const chatId = router.query.id as string

  useEffect(() => {
    if (!ChatService.getChatById(chatId)) {
      router.push('/')
    }
  }, [])

  return (
    <Home>
      <MainChat chatId={chatId} />
    </Home>
  )
}
