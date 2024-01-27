import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Test = () => {
    const [first, setfirst] = useState(false);
    const [name, setName] = useState('')
    return (
        <View style={{
            backgroundColor: 'pink',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextInput style={{
                width: '50%',
                padding: 10,
                borderWidth: first? 4:2,
                marginHorizontal:30,
                borderColor: first ? 'green' : 'red',
                color: first ? '#403499' :'blue'
            }}
            
            value={name}
            onChangeText={(name)=>{
                setName(name);
            }}
                placeholder='Enter ....'
                onFocus={()=>{
                    setfirst(false)
                    console.log('i am focused');
                }}
                onBlur={()=>{
                    setfirst(true);
                    console.log('i am blur');
                    console.log(name);
                }}
                onSubmitEditing={()=>{
                    setfirst(true);
                    console.log('i am editing');
                }}
                keyboardType='number-pad'
                returnKeyType='next'
            />
             <TextInput style={{
                width: '50%',
                padding: 10,
                borderWidth: first? 4:2,
                marginHorizontal:30,
                marginTop:5,
                borderColor: first ? 'green' : 'red',
                color: first ? '#403499' :'blue'
            }}
            
            value={name}
            onChangeText={(name)=>{
                setName(name);
            }}
                placeholder='Enter ....'
                onFocus={()=>{
                    setfirst(false)
                    console.log('i am focused');
                }}
                onBlur={()=>{
                    setfirst(true);
                    console.log('i am blur');
                    console.log(name);
                }}
                onSubmitEditing={()=>{
                    setfirst(true);
                    console.log('i am editing');
                }}
                keyboardType='number-pad'
                returnKeyType='google'
            />
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'blue',
        padding: 10,
        width: '70%'

    }
})