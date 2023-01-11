import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { ScreenContainer } from "react-native-screens";

const CreateAccount = () => {
  
  const [email, setEmail] = React.useState("");

  
  return (
    <View style={styles.container}>
 <View>
        {/* inloggen Text */}
        <Text style={styles.inLoggen}>inloggen</Text>
      </View>


  <View>
    <Text style={styles.title}>Maak je WeekMeals account</Text>
    
  </View>

<View></View>
    <Text style={{marginTop:30}}>E-mailadres</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        // value={number}
        placeholder="useless placeholder"
       
      />




      
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
container:{
marginLeft:20
},

  inLoggen: {
    fontWeight: "bold",
    marginTop: 40,
    marginRight: 40,
    textAlign: "right",
  },


  title:{
    fontWeight:"bold",
    fontSize:22,
    marginTop:80,
    
    width:200,
    
  },
  input: {
    flex: 1,
    height: 10,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    borderWidth: 1,
    padding: 24,
    borderRadius: 15,
    borderColor: "#D3D3D3",
  },
});
