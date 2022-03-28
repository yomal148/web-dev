import tuits from '../data/tuits.json';

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                logo_image: '/images/elon_musk_icon.jpeg',
                postedBy: {
                    'username': 'Elon Musk'
                },
                stats: {
                    comments: 0,
                    retuits: 111,
                    likes: 222,
                    replies: 333
                }
            };
            return [
                newTuit,
                ...state,
            ];
        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case 'like-tuit':
            return state.map(tuit => {
                if (tuit._id === action.tuit._id) {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });


        default:
            return tuits;
    }
};

export default tuitsReducer;