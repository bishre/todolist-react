const ADD = 'ADD';

export const addMessage = (message) => {
  return {
    type: ADD,
    text: message
  }
}
