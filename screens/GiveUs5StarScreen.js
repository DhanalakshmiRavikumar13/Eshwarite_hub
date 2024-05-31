import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GiveUs5StarScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0); // State to store the rating

  const handleGoBack = () => {
    // Navigate back to the main page
    navigation.goBack();
  };

  // Handler for when the user taps on a star to rate
  const handleStarPress = (starRating) => {
    setRating(starRating); // Update the rating state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give Us 5 Stars!</Text>
      <Text style={styles.message}>
        Thank you for using Eshwarite Hub! If you're enjoying our app and finding it helpful for your studies, please consider giving us a 5-star rating. Your feedback helps us improve and grow!
      </Text>
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
            <FontAwesome
              name={index <= rating ? 'star' : 'star-o'} // Filled star if index is less than or equal to the rating
              size={40}
              color={index <= rating ? '#FFD700' : '#D3D3D3'} // Filled star color or empty star color
            />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Back to Eshwarite Hub</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GiveUs5StarScreen;
