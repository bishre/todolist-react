const ADD = 'ADD';
const initialState = [];

export const messageReducer = (state=initialState, action) => {
  switch (action.type) {
        case ADD:
            return [...state, action.text];
        default:
            return state;
    }
}
