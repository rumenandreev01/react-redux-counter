export const increment = numberToAdd => {
    return {
        type: 'INCREMENT',
        payload: numberToAdd
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}