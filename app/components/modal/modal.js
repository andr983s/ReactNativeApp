import {Alert} from 'react-native';

export const Modal=(title, description, type)=>{

   switch(type){
        case 'custom':
            alert(title, description);
            break;
        default:
            alert(`Автор: ${title}`, `Название: ${description}`);
            break;
    }

    function alert (title, description){
        Alert.alert(
            title,
            description
        );
    }
    
    
}

