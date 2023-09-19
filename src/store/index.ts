import { configureStore } from '@reduxjs/toolkit'
import ChatsReducer from './reducers/chatsReducer'
import CustomizationReducer from './reducers/customizationReducer'

export const store = configureStore({
  reducer: {
    chats: ChatsReducer,
    customization: CustomizationReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
