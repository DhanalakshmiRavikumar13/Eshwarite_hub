import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const TermsOfUseScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms of Use for Eshwarite Hub</Text>

      <Text style={styles.sectionTitle}>Introduction:</Text>
      <Text>Welcome to Eshwarite Hub! These Terms of Use govern your use of the Eshwarite Hub app, an educational platform designed to enhance student learning. By accessing or using the app, you agree to abide by these terms and conditions.</Text>

      <Text style={styles.sectionTitle}>Study Material:</Text>
      <Text>Eshwarite Hub provides a variety of study materials, including notes, textbooks, and practice papers, to aid students in their academic pursuits. Users may access and utilize these materials for educational purposes only.</Text>

      <Text style={styles.sectionTitle}>Video Content:</Text>
      <Text>Our platform offers video lectures and tutorials covering a wide range of subjects to facilitate learning. Users may view and engage with this content to supplement their studies and enhance their understanding of academic concepts.</Text>

      <Text style={styles.sectionTitle}>Communication Between Students:</Text>
      <Text>Eshwarite Hub fosters a collaborative learning environment by enabling communication between students. Users may engage in discussions, share insights, and support each other's learning journeys within the app's community features.</Text>

      <Text style={styles.sectionTitle}>Query Submission to Teachers:</Text>
      <Text>Students can submit queries and questions to teachers through designated channels within the app. Teachers will endeavor to provide timely and helpful responses to assist students with their academic inquiries.</Text>

      <Text style={styles.sectionTitle}>User Conduct:</Text>
      <Text>Users are expected to conduct themselves in a respectful and responsible manner while using Eshwarite Hub. Any misuse of the app, including but not limited to unauthorized access, harassment, or dissemination of inappropriate content, will not be tolerated.</Text>

      <Text style={styles.sectionTitle}>Intellectual Property Rights:</Text>
      <Text>All content provided on Eshwarite Hub, including study materials, video content, and user-generated content, is protected by intellectual property laws. Users must respect these rights and refrain from unauthorized reproduction or distribution of copyrighted material.</Text>

      <Text style={styles.sectionTitle}>Disclaimer of Warranties:</Text>
      <Text>While Eshwarite Hub strives to provide accurate and reliable educational resources, we cannot guarantee the completeness or accuracy of the content available on the platform. Users acknowledge that they use the app at their own risk and discretion.</Text>

      <Text style={styles.sectionTitle}>Limitation of Liability:</Text>
      <Text>In no event shall Eshwarite Hub or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the app, even if advised of the possibility of such damages.</Text>

      <Text style={styles.sectionTitle}>Governing Law and Jurisdiction:</Text>
      <Text>These Terms of Use shall be governed by and construed in accordance with the laws of [insert jurisdiction]. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in [insert jurisdiction].</Text>

      <Text style={styles.sectionTitle}>Changes to Terms of Use:</Text>
      <Text>Eshwarite Hub reserves the right to modify or update these Terms of Use at any time without prior notice. Users are encouraged to review this document periodically for changes.</Text>

      <Text style={styles.sectionTitle}>Contact Us:</Text>
      <Text>If you have any questions or concerns about these Terms of Use, please contact us at [insert contact information].</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
});

export default TermsOfUseScreen;
