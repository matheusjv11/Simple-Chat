import { useRouter } from 'next/router'
import MainChat from '@/templates/MainChat'
import Home from '@/templates/Home'
import { RootState } from '@/store'
import { shallowEqual, useSelector } from 'react-redux'

export default function Chat() {
  const router = useRouter()
  const chatId = router.query.id as string

  const chat = useSelector(
    (state: RootState) => state.chats.userChats[chatId],
    shallowEqual
  )

  if (!chat) {
    return <></>
  }

  return (
    <Home>
      <MainChat chat={chat} />
    </Home>
  )
}
