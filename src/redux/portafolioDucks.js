const dataInicial = {
    banner: false
}

const OBTENER_ESTILO = 'OBTENER_ESTILO'


export default function portafolioReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_ESTILO:
            return { ...state, banner: action.payload }

        default:
            return state
    }

}


export const changeBanner = (e) => (dispatch, getState) => {
    let banner = getState().portafolio.banner
    if (banner === false) {
        banner =true
    } else {
        banner = false
    }
    dispatch({
        type: OBTENER_ESTILO,
        payload: banner

    })

}