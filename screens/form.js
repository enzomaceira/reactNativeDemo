import {StatusBar, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../Styles";
import React, {useState} from "react";
import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-assets/slider";

export const Form = ({navigation}) => {
    const [Name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [student, setStudent] = useState("Student");


    const onSubmit = () => {
        const params = {Name: Name, Email: email, Student: student};

        /*
          const res = await fetch("/v1/user", {
          method: "POST",
          body: JSON.stringify(state),
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
        });
        if (res.ok) {
          // Notify users
          setNotify(`${state.username} registered.  You will now need to log in.`);
        } else {
          const err = await res.json();
          setError(err.error);
        }
        }
     */
        navigation.navigate("Profile", params);
    }

    return(
        <View style={styles.landingPageView}>
            <Text style={{color: "#fff"}}>Register an account!</Text>
            <TextInput
                style={styles.textBox}
                secureTextEntry={true}
                placeholder="Name"
                onChangeText={val => setName(val)}
            />
            <TextInput
                style={styles.textBox}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={val => setPass(val)}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Email"
                onChangeText={val => setEmail(val)}
            />
            <Text>How much do you love React?</Text>
            <Slider
                style={{height:20, width: 100}}
                value={0}
                minimumValue={0}
                maximumValue={1}
                step={0}
                minimumTrackTintColor='lightgray'
                maximumTrackTintColor='lightgray'
                thumbTintColor='cyan'
                trackHeight={4}
                thumbSize={15} />
            <Text style={{marginTop:20}}> Are you a student? </Text>
            <Picker
                style={{width: 60, height: 100, marginBottom: 150, marginTop: -25}}
                selectedValue={student}
                onValueChange={studentStatus => setStudent(studentStatus)}>
                <Picker.Item label="I am a Student" value="Student" />
                <Picker.Item label="Non-Student" value="Non-Student" />
            </Picker>
            <Text style={{color: "#fff"}}>{pass.toString()}</Text>
            <TouchableOpacity style={styles.submitBtn} title={'Submit'} onPress={onSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>)
}