import {ActionCreator, ActionType} from '../actions/actions';
import  UnsplashService from '../services/unsplash-service';

const initialState = {
    images: [],
    selectedImage: ''
  }


const Reducer = (state = initialState, action)=>{
   
    switch(action.type){
        case ActionType.LOAD_IMAGES:
            return Object.assign({}, state ,{
                images: action.payload
            });
        case ActionType.SET_SELECTED_IMAGE:
            return Object.assign({}, state ,{
                selectedImage: action.payload
            });
        default: 
            return state;
    }
}



const Operation = {
    loadImages: ()=>(dispatch)=>{
        const unsplashService = new UnsplashService();
        unsplashService.getAllElements((elements)=>{
            dispatch(ActionCreator.loadImages(elements))
        });

    }
}



export {
    initialState,
    ActionCreator,
    Reducer,
    Operation
}