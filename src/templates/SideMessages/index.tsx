import { useEffect } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import * as S from './styles'
import SearchInput from '@/components/SearchInput'
import { ChatService } from '@/services/ChatService'
import { RootState, store } from '@/store'
import DarkModeSwitch from '@/components/DarkModeSwitch'
import ChatWrapper from './components/ChatWrapper'
import { useSelector } from 'react-redux'

const SideMessages = () => {
  const chatsKey = useSelector((state: RootState) => state.chats.userChatsKey)
  const stateChatsId = (state: RootState) => state.chats.userChatsId
  const stateFilter = (state: RootState) => state.chats.chatFilter

  const sortAndFilterChats = createSelector(
    [stateChatsId, stateFilter],
    (ids, filter) => {
      const filteredChats = ChatService.filterChats(ids, filter)

      return ChatService.orderChats(filteredChats)
    }
  )

  const chats = sortAndFilterChats(store.getState())

  return (
    <S.Wrapper>
      <S.SearchBox>
        <div>
          <h2>Chats</h2>
          <DarkModeSwitch />
        </div>
        <SearchInput />
      </S.SearchBox>
      <ChatWrapper chatIds={chats} />
      <S.Author>
        <p>
          Made by{' '}
          <a href="https://matheusaf.com/" target="blank">
            Matheus Almeida
          </a>
        </p>
      </S.Author>
    </S.Wrapper>
  )
}

export default SideMessages
