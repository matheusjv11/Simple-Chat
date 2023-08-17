import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupChatType } from '@/types/GroupChatType'
import { SingleChatType } from '@/types/SingleChatType'
import { InitialGroupChats } from '@/mock/InitialGroupChats'
import { InitialSingleChats } from '@/mock/InitialSingleChats'

export interface ChatsInitialState {
  userChats: (SingleChatType | GroupChatType)[]
}

const initialState: ChatsInitialState = {
  userChats: [...InitialGroupChats, ...InitialSingleChats]
}

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<SingleChatType | GroupChatType>) => {
      state.userChats = [...state.userChats, action.payload]
    }
  }
})

export const { addChat } = chatsSlice.actions

export default chatsSlice.reducer
