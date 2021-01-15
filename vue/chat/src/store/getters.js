export const threads = state => state.threads

export const currentThread = state => {
  return state.currentThreadID
    ? state.threads[state.currentThreadID]
    : {}
}

export const sortedMessages = (state, getters) => {
  const messages = getters.currentMessages
  return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
}

export const currentMessages = state => {
  const thread = currentThread(state)
  return thread.messages
    ? thread.messages.map(id => state.messages[id])
    : []
}