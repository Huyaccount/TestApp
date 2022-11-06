export const CapNhapphantramOne = 'Upone';
export const CapNhapphantramTwo = 'Uptwo';
export const CapNhapphantramThree = 'UpThree';
const initialState = {
    ListOne:'0%',
    ListTwo:'0%',
    ListThree:'0%',
    ListFour:'0%',
}

export default function InforPercent( state = initialState , payload)
{
    switch(payload.type){
        case CapNhapphantramOne :
        return{
            ...state,
            ListOne: payload.ListOne,
        }
        case CapNhapphantramTwo :
            return{
                ...state,
                ListTwo: payload.ListTwo,
            }
        case CapNhapphantramThree :
            return{
                ...state,
                ListThree: payload.ListThree,
            }
        default: return state
    }
}