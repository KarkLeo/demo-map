import { appStore } from "."

export type AppState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch