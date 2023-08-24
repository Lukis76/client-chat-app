import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'

interface Message {
    body: string
    from: string
    date: number
}
// Define a type for the slice state
interface CounterState {
    state: boolean
    room: string | number | null
    socket: Socket | null
    messages: Message[]
    rooms: []
    chat: {
        state: boolean
        room: string | null
        messages: Message[]
        users: []
    }
}

// Define the initial state using that type
const initialState: CounterState = {
    state: false,
    room: null,
    socket: null,
    messages: [],
    rooms: [],
    chat: {
        state: false,
        room: null,
        messages: [],
        users: [],
    },
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        storeMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload)
        },
        setRoomSate: (state, action: PayloadAction<string | number>) => {
            state.room = action.payload
        },
        stateSectionMessage: (state, action: PayloadAction<boolean>) => {
            state.state = action.payload
        },
    },
})

export const { storeMessage, setRoomSate, stateSectionMessage } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
