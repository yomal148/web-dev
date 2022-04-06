import { React, useEffect } from 'react';
import TuitListItem from './TuitListItem.js';
import { useDispatch, useSelector } from 'react-redux';
import { findAllTuits } from '../actions/tuits-actions';

const TuitList = () => {

    const tuits = useSelector(state => state.tuits);

    const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch), [dispatch]);

    return (
        <>
            {tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)}
        </>
    );
};

export default TuitList;