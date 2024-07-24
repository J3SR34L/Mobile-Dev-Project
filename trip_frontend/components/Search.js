import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Search = () => {
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [roomCount, setRoomCount] = useState(1);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleSearch = () => {
    console.log('Search with:', { destination, selectedDate, roomCount, adultsCount, childrenCount });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome5 name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter A Destination"
          onChangeText={setDestination}
          value={destination}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <FontAwesome5 name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.dates}>
        <Text style={styles.datesText}>
          Mon, April 12 - Tus, April 13
        </Text>
        <Text style={styles.datesText}>1 Night</Text>
      </View>

      <View style={styles.guestOptions}>
        <TouchableOpacity style={styles.guestOption}>
          <FontAwesome5 name="user" size={16} color="#fff" />
          <Text style={styles.guestOptionText}>{roomCount} Room</Text>
          <FontAwesome5 name="caret-down" size={16} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestOption}>
          <FontAwesome5 name="users" size={16} color="#fff" />
          <Text style={styles.guestOptionText}>{adultsCount} Adults</Text>
          <FontAwesome5 name="caret-down" size={16} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestOption}>
          <FontAwesome5 name="baby-carriage" size={16} color="#fff" />
          <Text style={styles.guestOptionText}>{childrenCount} Children</Text>
          <FontAwesome5 name="caret-down" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.priceRating}>
        <Text style={styles.priceRatingText}>Price, Star Rating</Text>
      </View>

      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <View style={styles.roomsContainer}>
        <TouchableOpacity style={styles.roomItem}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1554834053-c6898c8c3300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80' }}
            style={styles.roomImage}
          />
          <Text style={styles.roomTitle}>ROOM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roomItem}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1549989473-d0a2b6408468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80' }}
            style={styles.roomImage}
          />
          <Text style={styles.roomTitle}>Wash</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.selectRoomButton}>
        <Text style={styles.selectRoomButtonText}>Select Room</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  searchForm: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  searchIcon: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 4,
    marginLeft: 8,
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },
  datesText: {
    fontSize: 14,
    color: '#333',
  },
  guestOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  guestOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  guestOptionText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  priceRating: {
    padding: 16,
    backgroundColor: '#fff',
  },
  priceRatingText: {
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    padding: 16,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  roomsContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  roomItem: {
    flex: 1,
    marginRight: 16,
  },
  roomImage: {
    height: 150,
    width: '100%',
    borderRadius: 8,
  },
  roomTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  selectRoomButton: {
    padding: 16,
    backgroundColor: '#007bff',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectRoomButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Search;