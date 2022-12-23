import { slice } from '../slices/app';


export const getLoading = (params) => (dispatch) => {
    dispatch(slice.actions.getLoginLoading(params.isLoginLoading));
};

     