import { ADD_CHALLENGE } from '../actions/challenge'

const initialState = {
   isFetching: false,
   items: [
      {
         id: 0,
         title: 'Scream \'dick\' in Chipotle',
         description: 'Will go to local chipotle and scream \'dick\'',
         verification: 'video',
         goal: 0.008211
      }
   ]
}

export default function challenge(state = initialState, action) {
   switch (action.type) {
      case ADD_CHALLENGE:
         const items = [
            {
               id: state.reduce((maxId, challenge) => Math.max(challenge.id, maxId), -1) + 1,
               completed: action.challenge.title,
               description: action.challenge.description,
               verification: action.challenge.verification,
               goal: action.challenge.goal
            },
            ...state
         ]

         return Object.assign({}, { isFetching: false, items: items })
      default:
         return state;
   }
}
