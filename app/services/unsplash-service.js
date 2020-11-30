import {Modal} from '../components/modal/modal';
import {Error, api} from '../constants/constants';

export default class UnsplashService{
    getAllElements(callback){
        let getData = fetch(`${api.Base}${api.Key}`)

        getData
        .then((response)=>{
            if (!response.ok){
                Modal(Error.title, Error.description, 'custom');
                return response = [];
            }
            return response.json();
        })
        .then((data)=>{

            let arrayElements = data.map((element, i) => {
                return { id: i, srcThumbImage: element.urls.thumb, author: element.user.name, description: element.alt_description , srcFullImage: element.urls.full};
            }) 

            callback(arrayElements);
        })
    }
}