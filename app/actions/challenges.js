export const ADD_CHALLENGE = 'ADD_CHALLENGE';

export function addChallenge(challenge) {
   return {
      type: ADD_CHALLENGE,
      challenge
   }
}
