import React, {Component} from 'react';
import {StyleSheet, View, TextInput,Text,TouchableOpacity,ScrollView} from 'react-native';
import {TextInputLayout} from 'rn-textinputlayout';
import { Dropdown } from 'react-native-material-dropdown';
import MyDatePicker from '../components/DatePickerDate';
import MyTimePicker from '../components/DateTimePicker';

export default class Login extends Component {
    render() {

      let data = [{
        value: 'OLX',
      }, {
        value: 'Rumah Dijual',
      }, {
        value: 'Rumah 123',
      },{
        value: 'Facebook',
      },{
        value: 'Instagram',
      },{
        value: 'LinkedIn'
      }
    ];



        return (
          <ScrollView>
            <View style={styles.container}>
                    <Text style={styles.addText}>FORM ISI DATA RESPON</Text>
                <TextInputLayout
                    style={styles.inputLayout}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Nama Konsumen'}
                    />
                </TextInputLayout>

                <TextInputLayout
                    style={styles.inputLayout}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Alamat Konsumen'}
                    />
                </TextInputLayout>

              <TextInputLayout style={styles.inputDropdown}>
                <Dropdown
                    style={styles.dropdown}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    placeholder='Sumber Respon'
                    data={data}/>
              </TextInputLayout>

        
                <View
                    style={styles.inputLayout}
                >
                    <MyDatePicker
                        style={styles.textInput}
                        placeholder={'Tanggal'}
                    />
                </View>

                <View
                    style={styles.inputLayout}
                >
                    <MyTimePicker
                        style={styles.textInput}
                        placeholder={'Tanggal'}
                    />
                </View>

                <TextInputLayout
                    style={styles.inputLayout}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Jadwal Survei'}
                    />
                </TextInputLayout>

                <TextInputLayout
                    style={styles.inputLayout}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Status Konsumen'}
                    />
                </TextInputLayout>

                <TextInputLayout
                    style={styles.inputLayout}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Minat Lokasi'}
                    />
                </TextInputLayout>

           

                <TextInputLayout
                    style={styles.inputLayout}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Catatan'}
                        numberOfLines={10}
                         multiline={true}
                    />
                </TextInputLayout>     

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Simpan</Text>
                </TouchableOpacity>
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
    buttonContainer: {
        backgroundColor:'#2980b9',
        marginHorizontal: 24,
        marginBottom:50,
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
    addText: {
        fontSize:24,
        textAlign:'center',
        justifyContent:'center',
        fontWeight:'bold',
        marginTop:-20
    },dropdown :{
      fontSize: 16,
      width:120,
        height: 20,
      
    },
    inputDropdown :{
      marginTop:10,
      marginHorizontal: 24
    }
});