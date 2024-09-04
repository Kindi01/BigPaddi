import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from '../Screens/Intro';
import { Cart } from '../Screens/Cart';
import { HomeScreen } from '../Screens/HomeScreen';
import { Profile } from '../Screens/Profile';
import { Login } from '../Screens/Login';
import { Signup } from '../Screens/Signup';
import { PostProduct } from '../Screens/PostProduct';
import { EditProfile } from '../Screens/EditProfile';
// import { Pay } from '../Screens/Pay';
import { FundAccount } from '../Screens/FundAccount';
import { ChangePassword } from '../Screens/ChangePassword';
import { ForgotPassword } from '../Screens/ForgotPassword';
// import { MyProducts } from '../Screens/MyProducts';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} /> 
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
      <Stack.Screen name="PostProduct" component={PostProduct} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
            {/* <Stack.Screen name="Pay" component={Pay} options={{ headerShown: false }} /> */}

      <Stack.Screen name="FundAccount" component={FundAccount} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      {/* <Stack.Screen name="MyProducts" component={MyProducts} /> */}
    </Stack.Navigator>
  );
 }