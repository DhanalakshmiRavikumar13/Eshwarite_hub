import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackType, setFeedbackType] = useState('General Feedback');
  const [feedbackDetails, setFeedbackDetails] = useState('');
  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = () => {
    // Logic to submit feedback
    console.log('Feedback submitted:', {
      name,
      email,
      feedbackType,
      feedbackDetails,
      rating,
      recommendation
    });
    // Clear form fields after submission
    setName('');
    setEmail('');
    setFeedbackType('General Feedback');
    setFeedbackDetails('');
    setRating(0);
    setRecommendation('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share Your Feedback with Eshwarite Hub</Text>
      <Text style={styles.intro}>
        At Eshwarite Hub, we value your feedback as it helps us enhance our platform and better serve your educational needs. We strive to create an environment where every user's voice is heard and valued. Share your thoughts, suggestions, and experiences with us to help us improve and grow.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Name (Optional)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address (Optional)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Feedback Details"
        value={feedbackDetails}
        onChangeText={setFeedbackDetails}
        multiline
      />
      <Text style={styles.label}>Feedback Type:</Text>
      <TextInput
        style={styles.input}
        value={feedbackType}
        onChangeText={setFeedbackType}
      />
      <Text style={styles.label}>Rate Your Experience:</Text>
      {/* Implement Star Rating System */}
      {/* Implement Radio Buttons for Recommendation */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
      <Text style={styles.thankYou}>Thank you for taking the time to share your feedback with us. Your input is invaluable to us, and we are committed to using it to continuously improve Eshwarite Hub. If you have any further questions or concerns, please feel free to reach out to us at [contact email or link].</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  intro: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  thankYou: {
    marginTop: 20,
    fontSize: 14,
  },
});

export default FeedbackScreen;
