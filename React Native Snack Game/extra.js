import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity,
TouchableHighlight, Pressable, Button } from 'react-native';




const randomNo=()=>{
  var random=Math.floor(Math.random()*6)+1;
  return(
      <Text>{random}</Text>
  )
  
}


  const App = () => { 
    const[no, setNo]=React.useState('');
    const[left]=React.useState('');
    const[top]=React.useState('');
  return (
<>
  <ImageBackground source={require("./images/SnakesLaddersBoard.jpg")} style={{height: 800, width:600}} >

  <Image source={require("./images/player.png")} style={[no=='' && {left:50, top:700}, no=='1' && {left:100, top:390},styles.playerImage]} />
  
  </ImageBackground>

    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', top:40}} >

        <TouchableOpacity
        title="Click to throw dice"
        onPress={()=>setNo(randomNo())}
        style={styles.button}
        >
        <Text>Throw the Dice</Text>
        </TouchableOpacity>

              <Text> You got {no}</Text>
    </View>
</>
);
}


const styles = StyleSheet.create(
{
button: {
padding: 10,
borderRadius: 4,
borderWidth: 1,
borderColor: 'green',
backgroundColor: 'lightgreen',
marginLeft: 5,
},
playerImage: {
width: 20, 
height: 30, 
position:'absoulte',
}
}
)
export default App