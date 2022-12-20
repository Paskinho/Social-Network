import {ActionsTypes, dialogsPageType, MessagesType} from "./store";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";


const initialState: any = {


    users: [
        {id: 1, followed: true, fullName: 'Steven', status: 'Im a former Liverpool player and captain', location: {city: 'Liverpool', country: 'England'}},
        {id: 2, followed: true, fullName: 'Kenny', status: 'Im a former Liverpool player and best of all time maybe', location: {city: 'Glasgow', country: 'Scotland'}},
        {id: 3, followed: false, fullName: 'Luis', status: 'Im a former Liverpool player and owner golden boot in season 13/14', location: {city: 'Montevideo', country: 'Uruguay'}}
    ]
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: dialogsPageType=initialState , action: ActionsTypes) : dialogsPageType => {

    switch (action.type) {


        default: return state
    }

}

export const followAC =  () => ({type: FOLLOW})
export const unfollowAC =  () => ({type: UNFOLLOW})
