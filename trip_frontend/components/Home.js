import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your menu icon
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your profile icon
            style={styles.profileIcon}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteButtonText}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your emoji icon
            style={styles.emojiIcon}
          />
          Invite friends, earn $5,000
        </Text>
        <Image
          source={require('../assets/aeroplane.png')} // Replace with your arrow icon
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your hotel icon
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your airplane icon
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Airplanes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your car icon
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your home icon
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Homes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your money icon
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Invite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your bank icon
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Finance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your wallet icon
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image
            source={require('../assets/aeroplane.png')} // Replace with your tree icon
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Trees</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dealsContainer}>
        <Text style={styles.dealsTitle}>Deals</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View all</Text>
        </TouchableOpacity>
        <View style={styles.deals}>
          {/* Add your deals here */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  menuButton: {
    // Styles for the menu button
  },
  menuIcon: {
    // Styles for the menu icon
  },
  profileContainer: {
    // Styles for the profile container
  },
  profileIcon: {
    // Styles for the profile icon
  },
  inviteButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#007bff', // Blue color
    margin: 16,
    borderRadius: 8,
  },
  inviteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  emojiIcon: {
    // Styles for the emoji icon
  },
  arrowIcon: {
    // Styles for the arrow icon
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  category: {
    // Styles for each category
    flex: 1,
    alignItems: 'center',
    padding: 16,
    margin: 8,
    backgroundColor: '#f0f0f0', // Light grey background
    borderRadius: 8,
  },
  categoryIcon: {
    // Styles for category icons
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  categoryText: {
    // Styles for category text
  },
  dealsContainer: {
    padding: 16,
  },
  dealsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  viewAllButton: {
    // Styles for the "View all" button
  },
  viewAllButtonText: {
    // Styles for the "View all" button text
  },
  deals: {
    // Styles for the deals section
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
});

export default Home;