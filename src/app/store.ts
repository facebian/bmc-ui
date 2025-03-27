import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import usersSlice from '../features/Users/usersSlice'

export const store = configureStore({
    reducer: {
      users: usersSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;