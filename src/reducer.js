export function init(initialState) {
    return initialState;
  }

export const initialState = {
    score: 0,
    clicked: [],
    pastScores: [],
    win: false
  }

export function reducer(state, action) {
    switch (action.type) {
        case 'clicked new card':
            //update clicked array 
            //update score to new length of clicked array;
            const updatedClicked = [...state.clicked, action.payload]
            const updatedScore = state.score + 1;
            return {
                score: updatedScore,
                clicked: updatedClicked,
                pastScores: state.pastScores,
                win: state.win
            };
        case 'clicked same card twice':
            const updatedPastScores = [...state.pastScores, state.score];
            const resetClicked = [];
            const resetScore = resetClicked.length;
            return {
                score: resetScore,
                clicked: resetClicked,
                pastScores: updatedPastScores,
                win: false
            };
        case 'check won':
            let updatedWin;
            if (state.score === 15) {
                updatedWin = true;
            } else {
                updatedWin = false;
            }
            return {
                score: state.score,
                clicked: state.clicked,
                pastScores: state.pastScores,
                win: updatedWin
            }
      default:
        throw new Error();
    }
  }