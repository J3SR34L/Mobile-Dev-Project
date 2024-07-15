import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './components/StartPage';
import SignUp from './components/SignUp';
import Settings from './components/Settings';
import SignIn from './components/SignIn';
import Messages from './components/Message';
//import Chat from './components/Chat';
import MessageNew from './components/MessageO';
import Home from './components/Home';
import Login from './components/LoginOptions';
import Extra from './components/SignInExtra';
import Search from './components/Search';


export default function App() {
  return (
    <View style={styles.container}>
     <Search/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
