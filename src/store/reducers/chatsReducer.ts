import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Router from 'next/router'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import { InitialGroupChats } from '@/mock/InitialGroupChats'
import { InitialSingleChats } from '@/mock/InitialSingleChats'
import { UserChatsType } from '@/types/UserChatsType'
import { MessageType } from '@/types/MessageType'

const mockChats = { ...InitialGroupChats, ...InitialSingleChats }
const mockChatsIds = Object.values(mockChats).map((chat) => chat.id)

export interface ChatsInitialState {
  userChats: UserChatsType
  userChatsId: string[]
  userChatsKey: number
  chatFilter: string
}

const initialState: ChatsInitialState = {
  userChats: mockChats,
  userChatsId: mockChatsIds,
  userChatsKey: 0,
  chatFilter: ''
}

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<SingleChatType | GroupChatType>) => {
      state.userChats[action.payload.id] = action.payload
      state.userChatsId.push(action.payload.id)
      state.userChatsKey += 1
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
        state.userChatsKey += 1
      }
    },
    cleanUnreadMessages: (state, action: PayloadAction<{ id: string }>) => {
      if (action.payload.id in state.userChats) {
        state.userChats[action.payload.id].unreadMessages = 0
      }
    },
    updateChatFilter: (state, action: PayloadAction<string>) => {
      state.chatFilter = action.payload
      state.userChatsKey += 1
    },
    removeChat: (state, action: PayloadAction<{ id: string }>) => {
      if (action.payload.id in state.userChats) {
        const chatIndex = state.userChatsId.indexOf(action.payload.id)
        state.userChatsId.splice(chatIndex, 1)

        delete state.userChats[action.payload.id]
      }
    },
    pinChat: (state, action: PayloadAction<{ id: string }>) => {
      if (action.payload.id in state.userChats) {
        const newObject = state.userChats[action.payload.id]
        newObject.pinned = true
        state.userChats[action.payload.id] = newObject
      }

      state.userChatsKey += 1
    },
    unPinChat: (state, action: PayloadAction<{ id: string }>) => {
      if (action.payload.id in state.userChats) {
        const newObject = state.userChats[action.payload.id]
        newObject.pinned = false
        state.userChats[action.payload.id] = newObject
      }

      state.userChatsKey += 1
    }
  }
})

export const {
  addChat,
  addMessageIntoChat,
  cleanUnreadMessages,
  updateChatFilter,
  removeChat,
  pinChat,
  unPinChat
} = chatsSlice.actions

export default chatsSlice.reducer
