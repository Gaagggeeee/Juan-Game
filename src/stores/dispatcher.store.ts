import { store } from "./web.store";

export const DISPATCHER = (action: string) => {

    switch(action) {
        case 'GET_CATALOG': 
            //return store.getCatalog()
        break;
        case 'GET_LOCATION': 
            return store.getLocations()
        break;
    }
}