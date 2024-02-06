import {LOADER} from '../../../Theme/Constant/ReduxTypes';

const initialState = {
  loader: false,
};

export const LoaderReducer = (state = initialState, action: any) => {
  const prevState = {...state};
  const {type} = action;

  switch (type) {
    case LOADER:
      return {
        ...prevState,
        loader: action.loader,
      };
  }
  return prevState;
};
