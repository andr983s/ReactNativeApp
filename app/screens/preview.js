import React from 'react';
import {StyleSheet,View,Image} from 'react-native';

import {connect} from 'react-redux';

const PreviewScreen=({srcFullImage})=>{
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.Image} source={{ uri: srcFullImage }}/>
            </View>
        )
}


PreviewScreen.navigationOptions={
    headerTitle: 'Просмотр'
}



const mapStateToProps = (state) => {
    return {
        srcFullImage: state.selectedImage
    }
  }


export default connect(mapStateToProps)(PreviewScreen);


const styles = StyleSheet.create({
    imageContainer:{
        flex:1
    },
    Image:{
        flex: 1,
        resizeMode: 'contain'
    }
})
























// import React, { Component } from 'react';
// import {StyleSheet,View,FlatList,Image,Text, TouchableOpacity, Alert} from 'react-native';


// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dataSource: {},
//       showBigImage:false,
//       link:''
//     };
//   }

  


//   componentDidMount() {
    
  

//   function loadData(){

//      const _apiBase ='https://api.unsplash.com/photos/?client_id=';
//      const apiKey ='cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

//       return fetch(`${_apiBase}${apiKey}`)
//        .then((res)=>{
//           return res.json();
//        })
//        .then((body)=>{
//           return body;
//        });
//       }
     
//       loadData().then((arrayObjects)=>{
//         let arrayItems = arrayObjects.map((element, i) => {
//            return { id: i, src: element.urls.thumb, name: element.user.name, description: element.alt_description , linkFull: element.urls.full}; //------------
           
//         });

//         this.setState({
//           dataSource: arrayItems,
//         });
//       })
//   }

//   showDetail = (name, description) =>
//   Alert.alert(
//     `Автор: ${name}`,
//     `Название: ${description}`
//   );


//   changeView=()=>{
//     Alert.alert(
//       'Типа сменился вид отображения',
//       'Главное не забыть'
//     );
//   }

//   showImageFull=(linkimage)=>{
//       this.setState({
//         link: linkimage,
//         showBigImage:true
//       })
//   }


//   hideImageFull=()=>{
//     this.setState({
//       link: '',
//       showBigImage:false
//     })
// }

//   render() {

//     if (this.state.showBigImage) {

//       return (
//         
//         )  





//     }else{


   

//     return (
//       <View style={styles.MainContainer}>
//          <View style={{flexDirection: 'row', justifyContent:"space-between", alignItems:"center", height:60,backgroundColor: '#f0f0f0'}}>
//             <Text style={{marginLeft:15, fontSize: 20,color: 'black'}}>
//               Галерея
//             </Text>
//             <TouchableOpacity onPress={this.changeView}>
//                 <Text style={{fontSize: 20,color:"white",marginRight:15, paddingVertical:5,paddingHorizontal:10,borderRadius : 6, borderRadius : 5,backgroundColor:"#525252"}}>Вид</Text>
//             </TouchableOpacity>
//           </View>
        

//         <FlatList data={this.state.dataSource} renderItem={({ item }) => (
//             <View style={styles.ImageList}> 
//             <TouchableOpacity onPress={()=>{this.showImageFull(item.linkFull)}}>
//               <Image style={styles.ImagePreview} source={{ uri: item.src }}/> 
//             </TouchableOpacity>
//               <View>
//                 <Text style={styles.ImageText}>{item.name}</Text>
//                 <TouchableOpacity onPress={()=>{this.showDetail(item.name,item.description)}}>
//                   <Text style={{color:"#a9a9a9",fontSize:18, marginLeft: 8}}>Подробнее</Text>
//                 </TouchableOpacity>
//              </View>
//            </View>
//           )}
         
      
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     );
//   }
// }



// }


// const styles = StyleSheet.create({
//   MainContainer: {
//     justifyContent: 'center',
//     flex: 1,
//     paddingTop: 30,
//   },
//   ImageList:{
//     flex:1, 
//     flexDirection: 'row',
//     alignItems:"center"
//   },

//   ImagePreview: {
//     width: 200,
//     height: 100 ,
//     margin: 7,
//     borderRadius : 7
//   },
//   ImageText:{
//     fontSize: 20,
//     color: 'black',
//     marginLeft: 8
//   },

//   container: {
//     flex: 1,
//   },

//   backgroundImage: {
//    , // or 'stretch'
//   },
// });