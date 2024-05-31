import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const AboutAppScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About Eshwarite Hub</Text>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Introduction:</Text>
        <Text>Welcome to Eshwarite Hub, your all-in-one educational platform designed to enhance your learning experience. Our mission is to provide students with the tools they need to succeed academically while fostering a collaborative and supportive community. Whether you are looking for comprehensive study materials, engaging video content, or a way to communicate with peers and teachers, Eshwarite Hub has it all.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Study Material:</Text>
        <Text>At Eshwarite Hub, we offer a wide range of study materials to cater to various educational needs. Our resources include detailed notes, textbooks, practice papers, and more. Each piece of content is carefully curated by experienced educators and updated regularly to ensure it meets current academic standards. With our extensive library, you can find the right materials to help you excel in your studies.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Video Content:</Text>
        <Text>Our video lectures and tutorials are designed to make learning more interactive and engaging. Covering a broad spectrum of subjects and topics, our high-quality videos are created by expert educators to help you understand complex concepts easily. Whether you need help with math, science, language arts, or any other subject, our video content is here to support your learning journey.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Student Communication:</Text>
        <Text>Eshwarite Hub believes in the power of collaboration. Our app features tools that allow students to communicate and collaborate with each other seamlessly. Engage in group discussions, share insights, and support your peers through our platform. This collaborative environment fosters a sense of community and helps you learn more effectively.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Query Submission to Teachers:</Text>
        <Text>Have a question? Eshwarite Hub makes it easy to get answers. Our query submission feature allows you to send your questions directly to your teachers. Simply submit your query, and our dedicated educators will respond promptly, providing you with the guidance you need. Additionally, our app offers various support features to help you resolve any academic queries you may have.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Additional Features:</Text>
        <Text>Eshwarite Hub is packed with additional features to enhance your learning experience. From personalized study plans to progress tracking and interactive quizzes, our app is designed to cater to your unique learning needs. Explore all the features and discover how Eshwarite Hub can help you achieve your academic goals.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Conclusion:</Text>
        <Text>Join the Eshwarite Hub community today and unlock a world of educational resources and support. Our app is dedicated to helping you succeed academically and fostering a collaborative learning environment. Download Eshwarite Hub now and take the first step towards a brighter academic future.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AboutAppScreen;
