import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet,View,Text,TouchableOpacity,FlatList,Image} from 'react-native';

import {Modal} from '../../components/modal/modal';
import {ActionCreator} from '../../reducers/reducer';


const ImageList=({navigatePreview, elements ,setSelectedImageStore})=>{

   const showDescription=(title,description)=>{
        Modal(title,description);
    }

    const showFullImage=(srcFullImage)=>{
        setSelectedImageStore(srcFullImage);
        navigatePreview();
    }

     return (
     <FlatList data={elements} renderItem={({item}) => (
        <View style={styles.imageContainer}> 
        <TouchableOpacity onPress={()=>{showFullImage(item.srcFullImage)}}>
          <Image style={styles.image} source={{ uri: item.srcThumbImage }}/> 
        </TouchableOpacity>
          <View>
            <Text style={styles.imageAuthor}>{item.author}</Text>
            <TouchableOpacity onPress={()=>{showDescription(item.author,item.description)}}>
              <Text style={styles.buttonDetails}>Подробнее</Text>
            </TouchableOpacity>
         </View>
       </View>
      )}
     
      keyExtractor={(item) => item.id.toString()}
    />)
   
}

const mapStateToProps = (state) => {
    return {
        elements: state.images
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setSelectedImageStore: (srcFullImage)=> dispatch(ActionCreator.setSelectedImage(srcFullImage))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageList);


const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 100 ,
        margin: 7,
        borderRadius : 7
    },
    imageContainer:{
        flex:1, 
        flexDirection: 'row',
        alignItems:"center"
    },
    imageAuthor:{
        fontSize: 20,
        color: 'black',
        marginLeft: 8
    },
    buttonDetails:{
        color:"#a9a9a9",
        fontSize:18, 
        marginLeft: 8
    }
})