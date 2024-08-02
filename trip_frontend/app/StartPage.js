import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {router } from 'expo-router';
import { Link } from 'expo-router';


export default function StartPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://assets.withfra.me/Landing.3.png' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Travel the world{'\n'}with{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Trip.com</Text>
            </View>
          </Text>
          <Text style={styles.text}>
          Our website uses cookies that are essential for its operation.if you agree to us also using analytical,functional, and targeting cookies that allow us to improve our website, personalise content,and show you relevant adverts,please accept and continue.
          </Text>
        </View>
   
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>

          <View style={styles.button}>
        <Link href="/SignUp">    <Text style={styles.buttonText}>Accept and Continue</Text></Link>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  /** Hero */
  hero: {
    backgroundColor: '#d8dffe',
    margin: 12,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: '#fff2dd',
    transform: [
      {
        rotate: '-5deg',
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#281b52',
  },
  /** Button */
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});