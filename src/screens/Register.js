import React, {Component} from 'react';
import {StyleSheet, View, TextInput,Image,Text,TouchableOpacity,ScrollView} from 'react-native';
import {TextInputLayout} from 'rn-textinputlayout';
 
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default class Register extends Component {
 
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
               
                  <Image source={require('../assets/logo2.png')} style={styles.imageContainer} />
                <TextInputLayout
                    style={styles.inputLayout}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Nama'}
                    />
                </TextInputLayout>

                <TextInputLayout
                    style={styles.inputLayout}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Email'}
                        checkValid={t => EMAIL_REGEX.test(t)}
                    />
                </TextInputLayout>

                <TextInputLayout style={styles.inputLayout}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                </TextInputLayout>

                <TextInputLayout style={styles.inputLayout}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Confirm Password'}
                        secureTextEntry={true}
                    />
                </TextInputLayout>
                
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>

                <Text style={styles.loginText}>Already a member? 
                    <Text style={styles.loginStyle}
                    onPress={() => this.props.navigation.navigate('Login')}> Login</Text>
                </Text>
            </View>
        </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    textInput: {
        fontSize: 16,
        height: 40
    },
    inputLayout: {
        marginTop: 10,
        marginHorizontal: 24
    },
    imageContainer: {
        width: 280,
        height:100,
        justifyContent:'center',
        alignSelf:'center',
        resizeMode: 'contain',
        marginBottom:10,
        marginHorizontal: 24    
    },
    buttonContainer: {
        backgroundColor:'#2980b9',
        marginHorizontal: 24,
        marginTop:50,
        height:50,
        
        
    },
    buttonText: {
        textAlign:'center',
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:18,
        paddingVertical:14,
    },
    loginText: {
        fontSize:18,
        marginTop:20,
        textAlign:'center',
        justifyContent:'center',
        marginTop:20
    },
    loginStyle : {
        color:'#3498db'
    }
});