import React, {Component} from 'react';
import {StyleSheet, View, TextInput,Image,Text,TouchableOpacity} from 'react-native';
import {TextInputLayout} from 'rn-textinputlayout';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/logo2.png')} style={styles.imageContainer} />
                <TextInputLayout
                    style={styles.inputLayout}
                    checkValid={t => EMAIL_REGEX.test(t)}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Email'}
                    />
                </TextInputLayout>
                <TextInputLayout style={styles.inputLayout}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                </TextInputLayout>
                
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate('MainMenu')}>LOGIN</Text>
                </TouchableOpacity>

                <Text style={styles.registerText}>No account yet? 
                    <Text style={styles.registerStyle}
                    onPress={() => this.props.navigation.navigate('Register')}> Create One</Text>
                </Text>
            </View>
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
        marginTop: 20,
        marginHorizontal: 24
    },
    imageContainer: {
        width: 280,
        height:100,
        justifyContent:'center',
        alignSelf:'center',
        resizeMode: 'contain',
        marginBottom:20,
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
    registerText: {
        fontSize:18,
        marginTop:30,
        textAlign:'center',
        justifyContent:'center',
        marginTop:80
    },
    registerStyle : {
        color:'#3498db'
    }
});