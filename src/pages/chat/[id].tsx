import { useRouter } from 'next/router'
import MainChat from '@/templates/MainChat'
import Home from '@/templates/Home'

export default function Chat() {
  const router = useRouter()
  const chatId = router.query.id as string

  return (
    <Home>
      <MainChat chatId={chatId || ''} />
    </Home>
  )
}
