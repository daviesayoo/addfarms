import React from 'react';
import { StyleSheet, } from 'react-native';
import Auth  from 'firebase/auth';
import Button from '../components/Button'
// import {} from 'react-native-web';
// import {Auth} from 'firebase/auth';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const onLogin = () => {
    Auth.signInWithEmailAndPassword
  }

  const onLogout = () => {
    Auth.signOut
  }

  return (
    <View style={styles.container}>

      <Text style={{color: 'black', fontSize: '40px', marginTop: '-500px', marginBottom: '60px'}}> Getting Started with Firebase Authentication🚀</Text>

        <View style={styles.container2}>
            <label htmlFor="email" style={{marginTop: '15px'}}>Email</label>
            <input type="txtEmail" name="email" />

            <label htmlFor="password" style={{marginTop: '20px'}}>Password</label>
            <input type="Password" name="password" />

            <Button text="Login"  onPress={onLogin} />

            <Button text="Sign Out?" onPress={onLogout}/>

        </View>

        <Text style={{marginTop: '100px', marginBottom: '20px', color: 'black', fontSize: '25px'}}>List of Farms</Text>

        <View style= {styles.container2}>
          <Button text="Add Farms" onPress={{}}/>
        </View>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEDED'
  },
  
  container2: {
    backgroundColor: '#EAEDED',
    borderWidth: 5,
    marginBottom: '-20px',
    // width: '30%',
    borderColor: 'white',
    borderRadius: 6
    // height: '50%',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
