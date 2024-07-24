import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';

const Chat = () => {
  const [newMessage, setNewMessage] = useState('');
  const [dataSource, setDataSource] = useState([
    {
      user_id: 1,
      content: "Hello World!",
      created_at: new Date(),
    },
    {
      user_id: 2,
      content: "World isn't here, please leave a message.",
      created_at: new Date(),
    }
  ]);

  const scrollViewRef = useRef(null);
  const user = { id: 1 };

  useEffect(() => {
    // Load messages from Flux instead of example dataSource
  }, []);

  const handleInputFocus = () => {
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 100, animated: true });
      }
    }, 50);
  };

  const handleSendMessage = () => {
    console.log("Sending: " + newMessage);
    // Implement your send message logic here
    // Example:
    setDataSource([...dataSource, {
      user_id: user.id,
      content: newMessage,
      created_at: new Date(),
    }]);
    setNewMessage('');
  };

  const renderRow = (rowData) => (
    <View style={[styles.messageRow, rowData.user_id === user.id && styles.meRow]}>
      <TouchableOpacity
        style={[styles.messageContent, rowData.user_id === user.id && styles.me]}
        onPress={() => {/* Handle press if needed */}}
      >
        <View>
          <Text style={styles.message}>{rowData.content}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.messageDate}>{moment(rowData.created_at).fromNow()}</Text>
    </View>
  );

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      contentContainerStyle={styles.container}
    >
      <View style={styles.listView}>
        {dataSource.map((item, index) => renderRow(item, null, index))}
      </View>
      <TextInput
        style={styles.newInput}
        value={newMessage}
        onSubmitEditing={handleSendMessage}
        placeholder="Message..."
        returnKeyType="send"
        onFocus={handleInputFocus}
        onBlur={() => scrollViewRef.current?.scrollTo({ y: 0, animated: true })}
        onChangeText={setNewMessage}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 50,
  },
  listView: {
    flex: 2,
    padding: 10,
  },
  newInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    padding: 10,
    height: 50,
  },
  messageRow: {
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  meRow: {
    alignItems: 'flex-end',
  },
  messageContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
  },
  me: {
    alignItems: 'flex-end',
    backgroundColor: '#d2fffd',
  },
  message: {
    fontSize: 16,
    color: '#888',
  },
  messageDate: {
    fontSize: 12,
    color: '#656565',
    padding: 2,
  },
});

export default Chat;
