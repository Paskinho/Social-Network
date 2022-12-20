


export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>

type ActionsTypes = FollowType | UnfollowType


const initialState: any = {


    users: [
        {id: 1, followed: true, fullName: 'Steven', status: 'Im a former Liverpool player and captain', location: {city: 'Liverpool', country: 'England'}},
        {id: 2, followed: true, fullName: 'Kenny', status: 'Im a former Liverpool player and best of all time maybe', location: {city: 'Glasgow', country: 'Scotland'}},
        {id: 3, followed: false, fullName: 'Luis', status: 'Im a former Liverpool player and owner golden boot in season 13/14', location: {city: 'Montevideo', country: 'Uruguay'}}
    ]
}

export type InitialStateType = typeof initialState

export const usersReducer = (state =initialState , action: ActionsTypes)=> {

    switch (action.type) {
        case FOLLOW:

        case UNFOLLOW:

        default: return state
    }

}



export const followAC =  (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC =  (userId: string) => ({type: UNFOLLOW, userId})