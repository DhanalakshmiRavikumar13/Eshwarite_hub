import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get in Touch with Eshwarite Hub</Text>
      <Text style={styles.introduction}>
        Welcome to the Eshwarite Hub contact page! Whether you have questions, suggestions, or just want to say hello, we're here to help. Please fill out the form below or use the contact information provided to reach out to us. We look forward to hearing from you!
      </Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Contact Form:</Text>
        <TextInput style={styles.input} placeholder="Name (Optional)" />
        <TextInput style={styles.input} placeholder="Email Address (Optional)" />
        <TextInput style={styles.input} placeholder="Subject" />
        <TextInput style={[styles.input, styles.textArea]} multiline={true} placeholder="Message" />
      </View>
      
      <View style={styles.contactInfoContainer}>
        <Text style={styles.formTitle}>Contact Information:</Text>
        <Text>Email: ajay.d2023ai-ds@sece.ac.in</Text>
        <Text>Phone: 7639990012</Text>
        <Text>Address: Sri Eshwar College of Engineering, Kinathukadavu, Coimbatore</Text>
      </View>
      
      <View style={styles.socialMediaContainer}>
        <Text style={styles.formTitle}>Social Media:</Text>
        <Text>Instagram: @eshwaritehub</Text>
        <Text>LinkedIn: Eshwarite Hub</Text>
        <Text>Facebook: Eshwarite Hub</Text>
        <Text>Twitter: @eshwaritehub</Text>
      </View>
      
      {/* Embed a map showing the location of Eshwarite Hub or the headquarters */}

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.thankYou}>Thank you for reaching out to Eshwarite Hub! We'll do our best to respond to your inquiry as soon as possible. Your feedback and questions are important to us, and we appreciate your interest in our platform.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  introduction: {
    fontSize: 16,
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
  },
  contactInfoContainer: {
    marginBottom: 20,
  },
  socialMediaContainer: {
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  thankYou: {
    fontSize: 16,
  },
});

export default ContactScreen;
