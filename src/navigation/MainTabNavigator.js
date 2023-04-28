import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import ChatsScreen from '../screens/ChatsScreen';
import NotImplementedScreen from '../screens/NotImplementedScreen';

const Tab = createBottomTabNavigator();

const StatusTabBarIcon = ({ color, size }) => (
  <Ionicons name="logo-whatsapp" size={size} color={color} />
);

const CallTabBarIcon = ({ color, size }) => (
  <Ionicons name="call-outline" size={size} color={color} />
);

const CameraTabBarIcon = ({ color, size }) => (
  <Ionicons name="camera-outline" size={size} color={color} />
);

const ChatTabBarIcon = ({ color, size }) => (
  <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
);

const ChatHeaderRight = () => {
  const navigation = useNavigation();

  return (
    <Entypo
      onPress={() => navigation.navigate('Contacts')}
      name="new-message"
      size={18}
      color={'royalblue'}
      style={ChatHeaderRightStyles.mr15}
    />
  );
};

const ChatHeaderRightStyles = StyleSheet.create({
  mr15: { marginRight: 15 },
});

const SettingsTabBarIcon = ({ color, size }) => (
  <Ionicons name="settings-outline" size={size} color={color} />
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'whitesmoke' },
        headerStyle: { backgroundColor: 'whitesmoke' },
      }}
    >
      <Tab.Screen
        name="Status"
        component={NotImplementedScreen}
        options={{ tabBarIcon: StatusTabBarIcon }}
      />
      <Tab.Screen
        name="Calls"
        component={NotImplementedScreen}
        options={{ tabBarIcon: CallTabBarIcon }}
      />
      <Tab.Screen
        name="Camera"
        component={NotImplementedScreen}
        options={{ tabBarIcon: CameraTabBarIcon }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ChatTabBarIcon,
          headerRight: ChatHeaderRight,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={NotImplementedScreen}
        options={{ tabBarIcon: SettingsTabBarIcon }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
