import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Modal, Pressable, Alert } from 'react-native';
import imgrh from './assets/tundeimg.jpeg'
import { WebView } from 'react-native-webview';
import { useState } from 'react';

export default function App() {
  
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.profile}>
      <StatusBar style="auto" />
      <Image source={imgrh} style={styles.profileImg} />
      <Text style={styles.profileName}>Name: Hussain Babatunde</Text>
      <Text style={styles.textClick}>Click on the button below to View Github profile</Text>
      <Pressable  onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.openGithub}>Open Github </Text>
        </Pressable>

      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle='pageSheet'
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <WebView
          style={{height: 90}}
          source={{ uri: 'https://github.com/Hussainbabatunde' }}
        />
        <View style={styles.closeButton}>
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.hidemodal}>Close</Text>
            </Pressable>
            </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile:{
    justifyContent: "center",
    alignItems: 'center'
  },
  profileImg: {
    width: 200,
    height: 200,
    borderRadius: 50
  },
  profileName:{
    marginTop: 15,
    fontSize: 25,
   
    
  },
  hidemodal:{
    textAlign:'center',
    marginBottom: 30,
    backgroundColor:'red',
    marginTop: 20,
    width: 200,
    color: 'white',
    fontSize: 20,
    padding: 10
    
  },
  closeButton:{
    alignItems:'center'
  },
  openGithub:{
    backgroundColor: 'blue',
    color:'white',
    fontSize: 20, 
    padding: 10,
    borderRadius: 10,
    marginTop: 5
  },
  textClick:{
    marginTop: 20
  }
});
