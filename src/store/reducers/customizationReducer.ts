import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeModeType } from '@/types/ThemeModeType'

export interface CustomizationInitialState {
  themeMode: ThemeModeType
}

const initialState: CustomizationInitialState = {
  themeMode: 'light'
}

export const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    updateThemeMode: (state, action: PayloadAction<ThemeModeType>) => {
      state.themeMode = action.payload
    }
  }
})

export const { updateThemeMode } = customizationSlice.actions

export default customizationSlice.reducer
