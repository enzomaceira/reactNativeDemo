import {styles} from "../Styles";
import {Text, View, Image} from "react-native";
import {useEffect} from "react";


export const Profile = ({navigation, route}) => {

    useEffect(() => {
        navigation.setOptions({
            title: `${route.params.Name}'s Profile`,
        })
    }, []);

    return (
        <View style={styles.landingPageView}>
            <Text>Welcome, {route.params.Name}</Text>
            <Image style={styles.img} source={{
                uri: 'https://www.gravatar.com/avatar/d5730a6281a92d6c547a08b259e7f07a?s=200',
            }}></Image>
            {route.params.Student === "Student" && <Text>You are a Student.</Text>}
        </View>
    );
}