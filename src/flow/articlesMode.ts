import { State } from './model';

//ACTIONS
const ARTICLIE_MODE_NORMAL = 'ARTICLIE_MODE_NORMAL';
const ARTICLIE_MODE_ADDING = 'ARTICLIE_MODE_ADDING';
const ARTICLIE_MODE_DELETING = 'ARTICLIE_MODE_DELETING';

export const articleModeNormal = () => ({
  type: ARTICLIE_MODE_NORMAL,
});

export const articleModeAdding = () => ({
  type: ARTICLIE_MODE_ADDING,
});

export const articleModeDeleting = () =>({
  type: ARTICLIE_MODE_DELETING,
})


//REDUCERS

export const articlesMode = (state: State.articlesMode = 'NORMAL', action) => {

  switch(action.type){
    case ARTICLIE_MODE_NORMAL:
      return 'NORMAL'
    case ARTICLIE_MODE_ADDING:
      return 'ADDING';
    case ARTICLIE_MODE_DELETING:
      return 'DELETING';
    default:
      return state;
  }

}

