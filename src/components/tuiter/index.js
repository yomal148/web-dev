import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import {Outlet} from "react-router-dom";
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import whoReducer from './reducers/who-reducer';
import tuitsReducer from './reducers/tuits-reducer';
import profileReducer from './reducers/profile-reducer';

const reducer = combineReducers({
    tuits: tuitsReducer,
    who: whoReducer,
    profile: profileReducer,
});
const store = createStore(reducer);
const Index = () => {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="col-lg-4 col-xl-4 d-none d-lg-block">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    )
};

export default Index;
