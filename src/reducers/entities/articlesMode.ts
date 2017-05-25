//ACTIONS
const ARTICLIE_MODE_NORMAL = 'ARTICLIE_MODE_NORMAL';
const ARTICLIE_MODE_ADDING = 'ARTICLIE_MODE_ADDING';
const ARTICLIE_MODE_CHANGING = 'ARTICLIE_MODE_CHANGING';
const ARTICLIE_MODE_CANCELING = 'ARTICLIE_MODE_CANCELING';

export const articleModeNormal = () => ({
  type: ARTICLIE_MODE_NORMAL,
});

export const articleModeAdding = () => ({
  type: ARTICLIE_MODE_ADDING,
});

export const articleModeChanging = () =>({
  type: ARTICLIE_MODE_CHANGING,
})

export const articleModeCanceling = () =>({
  type: ARTICLIE_MODE_CANCELING,
})

//REDUCERS

export const articlesMode = (state: string = 'NORMAL', action) => {

  switch(action.type){
    case ARTICLIE_MODE_NORMAL:
      return 'NORMAL'
    case ARTICLIE_MODE_ADDING:
      return 'ADDING';
    case ARTICLIE_MODE_CHANGING:
      return 'CHANGING';
    case ARTICLIE_MODE_CANCELING:
      return 'NORMAL';
    default:
      return state;
  }

}

