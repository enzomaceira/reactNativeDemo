import {Button, StatusBar, Text, View} from "react-native";
import {styles} from "../Styles";

export const Landing = ({navigation}) => {
    return(
        <View style={styles.landingPageView}>
            <Text style={{color: "#fff"}}>Welcome to development with react Native!</Text>
            <Button
                title={"Let's Go!"}
                style={styles.button}
                onPress={() => {navigation.navigate('Form', {name: 'Enzo'})}}/>
            <StatusBar style="auto" />
        </View>)
}