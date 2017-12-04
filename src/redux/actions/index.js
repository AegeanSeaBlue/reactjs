export const ADD = 'ADD'
export const SUB = 'SUB'

export const addAction = (num) => ({
  type: ADD,
  num
})

export const subAction = (num) => ({
  type: SUB,
  num
})