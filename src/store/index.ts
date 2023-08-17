import { configureStore } from '@reduxjs/toolkit'
import ChatsReducer from './reducers/chatsReducer'

export const store = configureStore({
  reducer: {
    chats: ChatsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
