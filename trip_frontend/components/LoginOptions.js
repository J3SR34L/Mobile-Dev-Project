import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeIcon} onPress={() => Actions.pop()}>
          <Entypo name="cross" size={24} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsIcon}>
          <FontAwesome5 name="cog" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        {/* Replace with your actual image */}
        <View style={styles.imagePlaceholder}>
          <Text>Image</Text>
        </View>
      </View>
      <Text style={styles.title}>Trip.com</Text>
      <Text style={styles.subtitle}>Register/Sign In</Text>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <MaterialCommunityIcons name="google" size={24} color="#fff" />
        <Text style={styles.buttonText}>Continue With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <FontAwesome5 name="facebook" size={24} color="#fff" />
        <Text style={styles.buttonText}>Continue With Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Entypo name="mail" size={24} color="#fff" />
        <Text style={styles.buttonText}>Continue With Email</Text>
      </TouchableOpacity>

      <Text style={styles.continueText}>Or Continue With</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeIcon: {
    padding: 10,
  },
  settingsIcon: {
    padding: 10,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  continueText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Login;
