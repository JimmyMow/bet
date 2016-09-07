import { ADD_CHALLENGE } from '../actions/challenges'

const initialState = [
   {
      id: 0,
      title: 'Scream \'dick\' in Chipotle',
      description: 'Will go to local chipotle and scream \'dick\'',
      verification: 'video',
      goal: 0.008211
   }
]

export default function challenges(state = 0, action) {
   switch (action.type) {
      case ADD_CHALLENGE:
         return [
            {
               id: state.reduce((maxId, challenge) => Math.max(challenge.id, maxId), -1) + 1,
               completed: action.challenge.title,
               description: action.challenge.description,
               verification: action.challenge.verification,
               goal: action.challenge.goal
            },
            ...state
         ]
      default:
         return state;
   }
}
