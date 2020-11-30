const ActionCreator = {
    loadImages:(elementsList)=>({
        type: ActionType.LOAD_IMAGES,
        payload: elementsList
    }),
    setSelectedImage:(urlImage)=>({
        type: ActionType.SET_SELECTED_IMAGE,
        payload: urlImage
    }) 
}


const ActionType = {
    LOAD_IMAGES: 'LOAD_IMAGES',
    SET_SELECTED_IMAGE: 'SET_SELECTED_IMAGE'
}

export {
    ActionCreator,
    ActionType
}