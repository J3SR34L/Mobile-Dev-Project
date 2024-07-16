import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const Extra = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Icon name="close" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Or Sign In With</Text>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
          <Icon name="phone" size={20} color="#fff" />
        </View>
        <Text style={styles.buttonText}>Sign In with Phone number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.greenButton]}>
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