import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";

const BottomSheet = ({ visible, onClose, bulbName, setName }) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={{ backgroundColor: "white", padding: 16, borderRadius: 16 }}>
        <Text>Enter Your Bulb Name:</Text>
        <TextInput
          style={styles.input}
          value={bulbName}
          onChangeText={setName}
          maxLength={11}
        />
        <TouchableOpacity
          onPress={onClose}
          style={{
            marginTop: 5,
            alignItems: "center",
          }}>
          <Text
            style={{
              padding: 10,
              borderRadius: 5,
              // color: "0000",
              fontWeight: 500,
              fontSize: 15,
            }}>
            Done
          </Text>
        </TouchableOpacity>
        
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
    
  },

});

export default BottomSheet;
