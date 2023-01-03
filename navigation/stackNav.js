import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Agreement from '../screen/member/Agreement';
import Login from '../screen/member/Login';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown:false}} name="Agreement" component={Agreement} />
    </Stack.Navigator>
  );
}