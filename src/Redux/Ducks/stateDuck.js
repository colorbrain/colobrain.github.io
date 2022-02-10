// constantes
const initialData = {
  inputValues: [null, null, null, null],
  tests: [],
  selectedTest: 0,
  selectedBubble: 0,
}

// types
const SET_INPUT_VALUES_SUCCESS = 'SET_INPUT_VALUES_SUCCESS'
const SET_TESTS_SUCCESS = 'SET_TESTS_SUCCESS'
const SET_SELECTED_TESTS_SUCCESS = 'SET_SELECTED_TESTS_SUCCESS'
const SET_SELECTED_BUBBLE_SUCCESS = 'SET_SELECTED_BUBBLE_SUCCESS'

// reducer
export default function stateReducer(state = initialData, action) {
  switch (action.type) {
    case SET_INPUT_VALUES_SUCCESS:
      return { ...state, inputValues: action.payload }
    case SET_TESTS_SUCCESS:
      return { ...state, tests: action.payload }
    case SET_SELECTED_TESTS_SUCCESS:
      return { ...state, selectedTest: action.payload }
    case SET_SELECTED_BUBBLE_SUCCESS:
      return { ...state, selectedBubble: action.payload }
    default:
      return state
  }
}

// actions

export const setReduxInputValues = data => dispatch => {
  try {
    dispatch({
      type: SET_INPUT_VALUES_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.error(err)
  }
}

export const setReduxTests = data => dispatch => {
  try {
    dispatch({
      type: SET_TESTS_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.error(err)
  }
}

export const setReduxSelectedTest = data => dispatch => {
  try {
    dispatch({
      type: SET_SELECTED_TESTS_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.error(err)
  }
}

export const setReduxSelectedBubble = data => dispatch => {
  try {
    dispatch({
      type: SET_SELECTED_BUBBLE_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.error(err)
  }
}
