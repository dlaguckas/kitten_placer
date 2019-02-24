import { KITTENS_FETCH_SUCCESS, KITTENS_CREATE_SUCCESS, SELECT_KITTEN } from './types';
import kittenNames from './KittenNames.json';


export const kittensCreate = () => {
    return (dispatch) => {
        let kittens = kittenNames.map( (kitten, index) => (
            {
                id: index,
                kitten: {
                    kittenName: kitten.name,
                    source: `https://placekitten.com/400/${Math.floor(Math.random() * 100)+200}`,
                    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                }
            }
        ))
        dispatch({ type: KITTENS_CREATE_SUCCESS, payload: kittens });
        dispatch({ type: KITTENS_FETCH_SUCCESS, payload: kittens.slice(0, 30) });
    }
}

export const kittensFetch = (kittens, kittenCount) => {
    let visibleKittens = kittens.slice(0, kittenCount);
    return {
       type: KITTENS_FETCH_SUCCESS,
       payload: visibleKittens,
       listLength: kittenCount
    };
}

export const selectKitten = (kittenId) => {
    return {
        type: SELECT_KITTEN,
        payload: kittenId
    };
}
