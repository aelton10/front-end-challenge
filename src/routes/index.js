import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginPage from '../pages/LoginPage'
import SignPage from '../pages/SignPage'
import ClassesPage from '../pages/ClassesPage';
import ShowClassPage from '../pages/ShowClassPage';

const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="SignPage"
            component={SignPage}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="ClassesPage"
            component={ClassesPage}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="ShowClassPage"
            component={ShowClassPage}
            options={{headerShown:false}}
            />
            
        </Stack.Navigator>
    )
}