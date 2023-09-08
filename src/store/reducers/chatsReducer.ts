import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import { InitialGroupChats } from '@/mock/InitialGroupChats'
import { InitialSingleChats } from '@/mock/InitialSingleChats'
import { UserChatsType } from '@/types/UserChatsType'
import { MessageType } from '@/types/MessageType'

export interface ChatsInitialState {
  userChats: UserChatsType
}

const initialState: ChatsInitialState = {
  userChats: { ...InitialGroupChats, ...InitialSingleChats }
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
      action: PayloadAction<{ id: string; message: MessageType }>
    ) => {
      if (action.payload.id in state.userChats) {
        state.userChats[action.payload.id].lastMessage = action.payload.message
        state.userChats[action.payload.id].messages.push(action.payload.message)
      }
    }
  }
})

export const { addChat, addMessageIntoChat } = chatsSlice.actions

export default chatsSlice.reducer
