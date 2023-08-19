import type { RootState } from '@/redux/store'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface Message {
  body: string
  from: string
  date: number
}
// Define a type for the slice state
interface CounterState {
  messages: Message[]
}

// Define the initial state using that type
const initialState: CounterState = {
  messages: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload)
  
    },

  },
})

export const {  storeMessage } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
