import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, FlatList, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}>
              <FontAwesome5 name="bars" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.appName}>Profile</Text>
          </View>
      </View>
      
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    backgroundColor: '#285D41',
    paddingBottom: 10,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  iconContainer: {
    padding: 10,
  },
  appName: {
    color: '#fff',
    fontSize: 28,
    letterSpacing: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
