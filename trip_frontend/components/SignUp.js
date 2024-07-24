import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import axios from 'axios';

export default function SignUp({ navigation }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = async () => {
    const { name, email, password, confirmPassword } = form;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://your-backend-url/signup', {
        name,
        email,
        password,
        confirmPassword,
      });

      if (response.status === 200) {
        alert('User registered successfully');
        navigation.navigate('SignIn');
      }
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <View style={styles.headerBack}>
              <FeatherIcon
                color="#1D2A32"
                name="chevron-left"
                size={30}
                onPress={() => navigation.goBack()} />
            </View>

            <Text style={styles.title}>Let's Get Started!</Text>

            <Text style={styles.subtitle}>
              Fill in the fields below to get started with your new account.
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Full Name</Text>

              <TextInput
                clearButtonMode="while-editing"
                onChangeText={name => setForm({ ...form, name })}
                placeholder="John Doe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.name} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email Address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Confirm Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={confirmPassword =>
                  setForm({ ...form, confirmPassword })
                }
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.confirmPassword} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity onPress={handleSignUp}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Get Started</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Already have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: 'relative',
    marginLeft: -16,
    marginBottom: 6,
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
