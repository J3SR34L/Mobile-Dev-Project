import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

const MessageNew = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messages</Text>
        <MaterialIcons name="headphones" size={24} color="#000" />
      </View>

      <View style={styles.tabs}>
        <Text style={styles.tabText}>Notifications</Text>
        <Text style={styles.tabText}>Chats</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>No Messages</Text>
        <Text style={styles.subtitle}>Sign In Or Register To Plan Your Trips</Text>
        <TouchableOpacity style={styles.button} onPress={() => Actions.signin()}>
          <Text style={styles.buttonText}>Register/Sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => Actions.start()}>
          <MaterialIcons name="home" size={24} color="#000" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => Actions.messages()}>
          <MaterialIcons name="mail" size={24} color="#000" />
          <Text style={styles.footerText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => Actions.extra()}>
          <MaterialIcons name="flight-takeoff" size={24} color="#000" />
          <Text style={styles.footerText}>Extra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => Actions.signin()}>
          <MaterialIcons name="account-circle" size={24} color="#000" />
          <Text style={styles.footerText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    width: '100vw',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});

export default MessageNew;
