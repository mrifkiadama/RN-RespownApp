import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class DateTimePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 300,height:40}}
        date={this.state.date}
        mode="time"
        androidMode="spinner"
        placeholder={`Select Start Time`}
        format="YYYY-MM-DD"
        minDate="1997-01-01"
        maxDate="2020-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            // left: 260,
            left:0,
            top: 2,
            width:45,
            height:45
          },
          dateInput: {
            marginLeft:60,
            // marginLeft: 0,
            marginTop:10,
            
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}