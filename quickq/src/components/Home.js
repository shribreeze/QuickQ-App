import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, FlatList, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const popularShops = [
  { id: 1, name: "Shop 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Shop 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Shop 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Shop 4", image: "https://via.placeholder.com/150" },
];

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name="bars" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.appName}>QuickQ</Text>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Cart')}>
            <FontAwesome5 name="shopping-cart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search delicious food..."
            placeholderTextColor="#bbb"
          />
        </View>
      </View>

      <Animated.ScrollView style={styles.bottomSection}>
        {/* Explore Menu Section */}
        <View style={styles.exploreSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore Menu</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PopularDish')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../../public/images/sandwich.jpg')} style={styles.shopImage} />
              <Text style={styles.categoryText}>Sandwich</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../../public/images/shakes.jpg')} style={styles.shopImage} />
              <Text style={styles.categoryText}>Shakes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../../public/images/roll.jpg')} style={styles.shopImage} />
              <Text style={styles.categoryText}>Rolls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../../public/images/ChholeSamose.webp')} style={styles.shopImage} />
              <Text style={styles.categoryText}>Chhole Samose</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Shops Section */}
        <View style={styles.popularShopsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Shops</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ShopList')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={popularShops}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.shopCard}>
                <Image source={{ uri: item.image }} style={styles.shopImage} />
                <Text style={styles.shopName}>{item.name}</Text>
              </View>
            )}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          />
        </View>
        
        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 QuickQ. All Rights Reserved.</Text>
          <View style={styles.socialIcons}>
            <FontAwesome5 name="facebook" size={20} color="#fff" style={styles.socialIcon} />
            <FontAwesome5 name="twitter" size={20} color="#fff" style={styles.socialIcon} />
            <FontAwesome5 name="instagram" size={20} color="#fff" style={styles.socialIcon} />
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    backgroundColor: '#285D41',
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  searchSection: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 25,
    fontSize: 16,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
  exploreSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#285D41',
  },
  seeAllText: {
    color: '#285D41',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 5,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#285D41',
  },
  popularShopsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  shopCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 150,
    marginRight: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  shopImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  shopName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#285D41',
  },
  footer: {
    backgroundColor: '#285D41',
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIcon: {
    margin: 10,
  },
});
