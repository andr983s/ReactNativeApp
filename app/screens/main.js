import React from 'react';
import {StyleSheet,View} from 'react-native';


import ImageList from '../components/image-list/image-list';

export const MainScreen=({navigation})=>{

    const navigatePreview=()=>{
        navigation.navigate('Preview');
    }

        return (
            <View style={styles.mainContainer}>
               <ImageList navigatePreview={navigatePreview}/>
            </View>
        )
}


MainScreen.navigationOptions={
    headerTitle: 'Галерея'
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    }
})