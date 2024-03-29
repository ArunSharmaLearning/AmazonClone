export const initialState = {
    basket: [],
    user: null,
    search: ""

}

function reducer(state, action) {



    switch (action.type) {
        case "SET_USER":
            return {
                ...state, user: action.user
            }
            break
        case "ADD_TO_SEARCH":

            return {
                ...state, search: action.search
            }
            break
        case "QUANTITY":
            let newBasket = [...state.basket]
            const index = newBasket.findIndex((basketItem) => basketItem.id === action.id)
            if (index != -1)
                newBasket[index].quantity = action.value

            return {
                ...state,
                basket: newBasket
            }
            break;
        case "ADD_TO_BASKET":
            let Bask = [...state.basket]
            var flag = -1;
            flag = Bask.findIndex((val) => val.id === action.item.id)

            if (flag === -1)
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }
            else {


                Bask[flag].quantity++
                return {
                    ...state,
                    basket: Bask
                }
            }

            break
        case "REMOVE_FROM_BASKET":
            let newBasket1 = [...state.basket]
            const index1 = newBasket1.findIndex((basketItem) => {
                return ((basketItem.id) === action.id)
            })
            newBasket1.splice(index1, 1)

            return { ...state, basket: newBasket1 }
            break

        case "PAYMENT_DONE":
            return { ...state, basket: [] }

        default:

            return state
    }
}

export default reducer