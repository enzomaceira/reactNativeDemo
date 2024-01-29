import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from "./Styles"
import { Landing } from "./screens/landing"
import { Form } from "./screens/form"
import { Profile } from "./screens/profile"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} options={{title: 'Welcome'}}/>
          <Stack.Screen name="Form" component={Form} options={{title: 'Form'}}/>
          <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

