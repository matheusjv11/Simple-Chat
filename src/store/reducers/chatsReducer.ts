import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Router from 'next/router'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import { InitialGroupChats } from '@/mock/InitialGroupChats'
import { InitialSingleChats } from '@/mock/InitialSingleChats'
import { UserChatsType } from '@/types/UserChatsType'
import { MessageType } from '@/types/MessageType'

export interface ChatsInitialState {
  userChats: UserChatsType
  chatFilter: string
}

const initialState: ChatsInitialState = {
  userChats: { ...InitialGroupChats, ...InitialSingleChats },
  chatFilter: ''
}

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<SingleChatType | GroupChatType>) => {
      state.userChats[action.payload.id] = action.payload
    },
    addMessageIntoChat: (
      state,
      action: PayloadAction<{
        id: string
        message: MessageType
      }>
    ) => {
      if (action.payload.id in state.userChats) {
        // Set a maximum lenght to chat's messages
        if (state.userChats[action.payload.id].messages.length >= 50) {
          state.userChats[action.payload.id].messages.shift()
        }

        // Increment the unread messages if user is not on chat page
        if (Router.query.id !== state.userChats[action.payload.id].id) {
          state.userChats[action.payload.id].unreadMessages += 1
        }

        // Finally, inserts message into chat
        state.userChats[action.payload.id].lastMessage = action.payload.message
        state.userChats[action.payload.id].messages.push(action.payload.message)
      }
    },
    cleanUnreadMessages: (state, action: PayloadAction<{ id: string }>) => {
      if (action.payload.id in state.userChats) {
        state.userChats[action.payload.id].unreadMessages = 0
      }
    },
    updateChatFilter: (state, action: PayloadAction<string>) => {
      state.chatFilter = action.payload
    }
  }
})

export const {
  addChat,
  addMessageIntoChat,
  cleanUnreadMessages,
  updateChatFilter
} = chatsSlice.actions

export default chatsSlice.reducer
