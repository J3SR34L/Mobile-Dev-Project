import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Link} from "expo-router"

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/1.jpeg')} style={styles.backgroundImage} />
      <View style={styles.header}>
        <Text style={styles.headerText}>My Trips</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Travel Plans</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>All Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsIcon}>
      <Link href="/Settings"> <FontAwesome5 name="cog" size={24} color="#007bff" /></Link>   
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Plan Your Journey To Anywhere With Trip.Com</Text>
        <TouchableOpacity style={styles.searchButton}>
         <Link href="/Search"> <Text style={styles.searchButtonText}>Search Bookings</Text></Link>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EUROPE</Text>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={require('../assets/1.jpeg')} style={styles.cardImage} />
              <Text style={styles.cardText}>Popular Best Things To Do In Paris</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/2.jpeg')} style={styles.cardImage} />
              <Text style={styles.cardText}>Popular Luxury Hotels In London</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/3.jpeg')} style={styles.cardImage} />
              <Text style={styles.cardText}>Popular Attractions In Barcelona</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ASIA</Text>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={require('../assets/3.jpeg')} style={styles.cardImage} />
              <Text style={styles.cardText}>Popular Things To Do In Vietnam</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/2.jpeg')} style={styles.cardImage} />
              <Text style={styles.cardText}>Popular Things To Do In Tokyo</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/1.jpeg')} style={styles.cardImage} />
              <Text style={styles.cardText}>Popular Things To Do In India</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.settingsIcon}>
      <Link href="/Message"> <Image source={require('../assets/message-solid.svg')} style={{width:'30px',height:'30px',marginLeft:'350px'}}/></Link>   
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.1,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    marginBottom: 20,
  },
  searchButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '32%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
  },
});

export default App;
