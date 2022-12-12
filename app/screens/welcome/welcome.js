import { width } from '@mui/system';
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import Container from '../../container/container';
import {loginIcon,strings} from '../../strings';
import { Button } from '@rneui/themed';
 
export default function Welcome ({navigation}) {
  return (
    //  <Container>
        <View style={styles.mainBody}>
            <ScrollView contentContainerStyle={{
                flex: 1,
                marginTop:100,
                alignContent: 'center',
                }}>
                <View style={{alignItems:'center'}}>
                    <Image style={{width:'50%',height:100}} source={loginIcon}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        buttonStyle={{
                            backgroundColor: '#6200EE',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 30,
                            // position:'absolute',
                            // bottom: 0
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        title={strings.logIn}
                        onPress={() => navigation.navigate('Login')}
                        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}/>
                        <Button
                        buttonStyle={{
                            backgroundColor: '#6200EE',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 30,
                            // position:'absolute',
                            // bottom: 0
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        title={strings.loanStatus}
                        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}/>
                </View>
                
            </ScrollView>
            
        </View>
    //  </Container>
  );
};

 
const styles = StyleSheet.create({
    mainBody : {
        backgroundColor: "#62ff",
        flex: 1,
    },
    buttonStyle:{
        backgroundColor: '#6200EE',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        
      },
      containerStyle:{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      },
      buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        alignItems:'center'
      },

});