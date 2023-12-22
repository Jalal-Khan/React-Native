// Home.tsx
import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.button}>
        <Text style={styles.buttonText}>Show Calendar</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar
          //   style={{borderRadius: 10, elevation: 4, margin: 40}}
          onDayPress={date => {
            console.log(date);
            setShowModal(false);
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 40,
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    width: 200,
    textAlign: 'center',
  },
});

export default Home;
