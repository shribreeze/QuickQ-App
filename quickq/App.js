import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './src/components/Home';
import Profile from './src/components/Profile';
import Wishlist from './src/components/Wishlist';
import Cart from './src/components/Cart';
import Orders from './src/components/Orders';
import Settings from './src/components/Settings';
import About from './src/components/About';
import Privacy from './src/components/Privacy';
import ShopList from './src/components/ShopList';
import PopularDish from './src/components/PopularDish';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>QuickQ</Text>
      </View>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Profile')}>
        <Text style={styles.drawerItemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Wishlist')}>
        <Text style={styles.drawerItemText}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('PopularDish')}>
        <Text style={styles.drawerItemText}>Popular Dishes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('ShopList')}>
        <Text style={styles.drawerItemText}>Shop List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Cart')}>
        <Text style={styles.drawerItemText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Orders')}>
        <Text style={styles.drawerItemText}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Settings')}>
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('About')}>
        <Text style={styles.drawerItemText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Privacy')}>
        <Text style={styles.drawerItemText}>Privacy</Text>
      </TouchableOpacity>
    </View>
  );
};


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Drawer');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Image source={require('./public/LogoMini.png')} style={styles.logo} />
      <Text style={styles.splashText}>Welcome to QuickQ</Text>
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#285D41" />

      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Drawer" options={{ headerShown: false }}>
          {() => (
            <Drawer.Navigator
              screenOptions={{
                headerShown: false,
              }}
              drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Profile" component={Profile} />
              <Drawer.Screen name="Wishlist" component={Wishlist} />
              <Drawer.Screen name="PopularDish" component={PopularDish} />
              <Drawer.Screen name="ShopList" component={ShopList} />
              <Drawer.Screen name="Cart" component={Cart} />
              <Drawer.Screen name="Orders" component={Orders} />
              <Drawer.Screen name="Settings" component={Settings} />
              <Drawer.Screen name="About" component={About} />
              <Drawer.Screen name="Privacy" component={Privacy} />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#285D41',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  splashText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  drawerHeader: {
    backgroundColor: '#285D41',
    padding: 20,
    alignItems: 'center',
  },
  drawerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  drawerItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  drawerItemText: {
    fontSize: 18,
    color: '#000',
  },
});
