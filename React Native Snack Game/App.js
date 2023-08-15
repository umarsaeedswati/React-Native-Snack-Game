import React,{useState} from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

  var left=0
  var top=0
  var random
  var playerplace=0;

const randomNo=()=>{
random=Math.floor(Math.random()*6)+1;
 playerplace= random+playerplace
  return(  random
)
  
}




 const vertical =()=>
    {
      if  (playerplace==0)
        {
            left=30;
            return  left;
            }
     
        if  (playerplace==1)
        {
            left=80;
            return  left;
            }
              if  (playerplace==2)
        {
            left=140;
             return  left;
              
            }
              if  (playerplace==3)
    
            { left=200;
              return  left;
                
            }
              if  (playerplace==4)
        {
             left=260;
              return  left;
                
            }
                  if  (playerplace==5)
        {
             left=260;
              return  left;
                
            }
                  if  (playerplace==6)
        {
             left=200;
              return  left;
                
            }
                        if  (playerplace==7)
        {
             left=140;
              return  left;
                
            }
                 if  (playerplace==8)
        {
             left=80;
           return    left
            

                
            }
                  if  (playerplace==9)
        {
             left=30;
           return   ( left
              )
                
            }
                  if  (playerplace==10)
        {
             left=30;
           return   left
              
                
            }
                  if  (playerplace==11)
        {
             left=80;
           return  left
              
                
            }
              if  (playerplace==12)
        {
            left=140;
             return  left;
              
            }
              if  (playerplace==13)
    
            { left=200;
              return ([{left}],
              playerplace=playerplace-12)
                
            }
              if  (playerplace==14)
        {
             left=260;
              return  left;
                
            }
     if  (playerplace==19)
        {
             left=30;
           return   left
              
                
            }
                  if  (playerplace==18)
        {
             left=80;
           return  left
              
                
            }
              if  (playerplace==17)
        {
            left=140;
             return  left;
              
            }
              if  (playerplace==16)
    
            { left=200;
              return  left;
                
            }
              if  (playerplace==15)
        {
             left=80;
              return  left;
                
        }
            if  (playerplace==20)
        {
             left=30;
           return   left
              
                
            }
                  if  (playerplace==21)
        {
             left=80;
           return  left
              
                
            }
              if  (playerplace==22)
        {
            left=140;
             return  left;
              
            }
              if  (playerplace==23)
    
            { left=200;
              return  left;
                
            }
              if  (playerplace==24)
        {
             left=260;
              return  left;
                
            }
            if  (playerplace==29)
        {
             left=30;
           return   left
              
                
            }
                  if  (playerplace==28)
        {
             left=80;
           return  left
              
                
            }
              if  (playerplace==27)
        {
            left=140;
             return  left;
              
            }
              if  (playerplace==26)
    
            { left=200;
              return  left;
                
            }
              if  (playerplace==25)
        {
             left=260;
              return  left;
                
            }
            if  (playerplace==30)
        {
             left=30;
           return   left
              
                
            }
                  if  (playerplace==31)
        {
             left=80;
           return  left
              
                
            }
              if  (playerplace==32)
        {
            left=140;
             return  left;
              
            }
              if  (playerplace==33)
    
            { left=200;
              return  left;
                
            }
              if  (playerplace==34)
        {
             left=260;
              return  left;
                
            }
     
     
     
     
     
       return

    }

     


  const horizontal =()=>
    {
     
        if  (playerplace==1)
        {
            top=400;
            return top;
            }
              if  (playerplace==2)
        {
            top=400;
             return  top;
              
            }
              if  (playerplace==3)
        {
             top=400;
              return  top;
                
            }
              if  (playerplace==4)
        {
             top=400;
              return  top;
                
            }
                  if  (playerplace==5)
        {
             top=350;
              return  top;
                
            }
                        if  (playerplace==6)
        {
             top=350;
              return  top;
                
            }
                          if  (playerplace==7)
        {
             top=350;
              return  top;
                
            }
     
                   if  (playerplace==8)
        {
             top=300;
              return (top,[ 
              playerplace=playerplace+3])
                
            }
     
                   if  (playerplace==9)
        {
             top=350;
              return  top;
                
            }
                   if  (playerplace==10)
        {
             top=300;
              return  top;
                
            }
     
                   if  (playerplace==11)
        {
             top=300;
              return  top;
                
            }
             if  (playerplace==12)
        {
             top=300;
              return  top;
                
            }
             if  (playerplace==13)
        {
             top=300;
              return (top,[
              playerplace=playerplace-12])
                
            }
             if  (playerplace==14)
        {
             top=300;
              return  top;
                
            }
            
             if  (playerplace==15)
        {
             top=130;
              return (top,[ 
              playerplace=playerplace+11])
                
            }
             if  (playerplace==16)
        {
             top=245;
              return  top;
                
            }
             if  (playerplace==17)
        {
             top=245;
              return  top;
                
            }
             if  (playerplace==18)
        {
             top=245;
              return  top;
                
            }
             if  (playerplace==19)
        {
             top=245;
              return  top;
                
            }
             if  (playerplace==20)
        {
             top=180;
              return  top;
                
            }
            if  (playerplace==21)
        {
             top=70;
              return (top,[ 
              playerplace=playerplace+10])
              
                
            }
            if  (playerplace==22)
        {
             top=180;
              return  top;
                
            }
            if  (playerplace==23)
        {
             top=180;
              return  top;
                
            }
            if  (playerplace==24)
        {
             top=180;
              return  top;
                
            }
            if  (playerplace==25)
        {
             top=130;
              return  top;
                
            }
            if  (playerplace==26)
        {
             top=130;
              return  top;
                
            }
            if  (playerplace==27)
        {
             top=130;
               return (top,[ 
              playerplace=playerplace-11])
                
            }
            if  (playerplace==28)
        {
             top=130;
              return  top;
                
            }
            if  (playerplace==29)
        {
             top=130;
              return  top;
                
            }
            if  (playerplace==30)
        {
             top=70;
              return  top;
                
            }
            if  (playerplace==31)
        {
             top=70;
              return  top;
                
            }
            if  (playerplace==32)
        {
             top=70;
              return  top;
                
            }
            if  (playerplace==33)
        {
             top=70;
               return (top,[ 
              playerplace=playerplace-15])
                
            }
            if  (playerplace==34)
        {
             top=70;
              return  top;
                
            }
            if  (playerplace>=34)
        {
            
              return playerplace=playerplace-playerplace;
                
            }
            
     
     
     
       

    }






  const App = () => { 
    const[no, setNo]=useState('');
    const[left,setleft]=useState(30);
    const[top,settop]=useState(400);
  return (
<>
  <ImageBackground source={require("./images/SnakesLaddersBoard.jpg")} style={{height: 500, width:300}} >

  <Image source={require("./images/player.png")} style={[{left:left, top:top},styles.playerImage]} />
  }
  </ImageBackground>

    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', top:40}} >

        <TouchableOpacity
        title="Click to throw dice"
        onPress={()=>{setNo(randomNo()),settop(horizontal()),setleft(vertical())}}
        style={styles.button}
        >
        <Text>Throw the Dice</Text>
        </TouchableOpacity>

              <Text> You got {no}</Text>
    </View>
    <View style={{top:-40}} >
    <Text style={{fontSize:20,color:"black"}}> Your Postion is {playerplace}</Text>
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