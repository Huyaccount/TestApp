import {CapNhapphantramOne,CapNhapphantramTwo} from '../UnitOne/InforPercent'
export const updateListone = (ListOne) => async dispatch => {
    try{
        dispatch({
            type: CapNhapphantramOne,
            ListOne:ListOne
        })
    }
    catch(error){
    }
}
// Update 2
export const updateListtwo = (ListTwo) => async dispatch => {
    try{
        dispatch({
            type: CapNhapphantramTwo,
            ListTwo:ListTwo
        })
    }
    catch(error){
    }
}