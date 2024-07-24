import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Extra = () => {
  const handleSignIn = async (method) => {
    const phoneNumber = "1234567890"; // Replace with actual phone number input

    try {
      const response = await fetch('http://localhost:8000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, method })
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Sign-in successful');
      } else {
        Alert.alert('Error', data.errors ? data.errors[0].msg : 'Something went wrong');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Icon name="close" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Or Sign In With</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleSignIn('phone')}>
        <View style={styles.iconContainer}>
          <Icon name="phone" size={20} color="#fff" />
        </View>
        <Text style={styles.buttonText}>Sign In with Phone number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.greenButton]} onPress={() => handleSignIn('whatsapp')}>
        <Text style={styles.buttonText}>Continue with Whatsapp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3b5998',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenButton: {
    backgroundColor: '#4CAF50',
  },
  iconContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Extra;
