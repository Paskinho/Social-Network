import React from 'react';
import {StoreType} from "./redux-store";


const StoreContext=React.createContext({} as StoreType);


export type ProviderType = {
    store: StoreType

}


export default StoreContext;