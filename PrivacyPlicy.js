import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Privacy Policy</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Introduction</Text>
          <Text style={styles.paragraph}>
            Welcome to Eshwarite Hub. This privacy policy outlines how we collect, use, and protect your personal information when you use our app. We are committed to ensuring that your privacy is protected.
          </Text>

          <Text style={styles.title}>Information We Collect</Text>
          <Text style={styles.paragraph}>We collect the following information when you use our app:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}><Text style={styles.bold}>Personal Information:</Text> Name, email address, and contact details when you register.</Text>
            <Text style={styles.listItem}><Text style={styles.bold}>Usage Data:</Text> Information about how you use the app, including your interactions, preferences, and accessed content.</Text>
            <Text style={styles.listItem}><Text style={styles.bold}>Device Information:</Text> Information about the device you use to access our app, including IP address, browser type, and operating system.</Text>
          </View>

          <Text style={styles.title}>How We Use Your Information</Text>
          <Text style={styles.paragraph}>We use your information to:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>Provide and improve our services.</Text>
            <Text style={styles.listItem}>Personalize your experience within the app.</Text>
            <Text style={styles.listItem}>Respond to your queries and support requests.</Text>
            <Text style={styles.listItem}>Send you updates, promotional materials, and other information related to our services.</Text>
            <Text style={styles.listItem}>Monitor and analyze usage and trends to improve the app's functionality and user experience.</Text>
          </View>

          <Text style={styles.title}>Sharing Your Information</Text>
          <Text style={styles.paragraph}>We do not sell, trade, or otherwise transfer your personal information to outside parties except under the following circumstances:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>With your consent.</Text>
            <Text style={styles.listItem}>To comply with legal obligations or respond to lawful requests from public authorities.</Text>
            <Text style={styles.listItem}>To protect and defend our rights or property.</Text>
            <Text style={styles.listItem}>In connection with a merger, acquisition, or sale of all or a portion of our assets.</Text>
          </View>

          <Text style={styles.title}>Security</Text>
          <Text style={styles.paragraph}>We are committed to ensuring that your information is secure. We have implemented appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or destruction.</Text>

          <Text style={styles.title}>Cookies</Text>
          <Text style={styles.paragraph}>We use cookies to enhance your experience on our app. Cookies are small files that are stored on your device. You can choose to accept or decline cookies. However, declining cookies may limit your ability to use certain features of the app.</Text>

          <Text style={styles.title}>Third-Party Links</Text>
          <Text style={styles.paragraph}>Our app may contain links to other websites or apps. We are not responsible for the privacy practices or the content of these third-party sites.</Text>

          <Text style={styles.title}>Children's Privacy</Text>
          <Text style={styles.paragraph}>Our app is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.</Text>

          <Text style={styles.title}>Changes to This Privacy Policy</Text>
          <Text style={styles.paragraph}>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</Text>

          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.paragraph}>If you have any questions about this privacy policy or our privacy practices, please contact us at support@eshwaritehub.com.</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 Eshwarite Hub. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#333',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  contentContainer: {
    padding: 20,
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    // React Native doesn't support boxShadow directly like in CSS.
    // Use elevation for shadow effect in Android and shadow properties for iOS.
    elevation: 5, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.8, // for iOS
    shadowRadius: 2, // for iOS
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: '#0073e6',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 24, // Line height for better readability
  },
  list: {
    marginLeft: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#333',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});

export default PrivacyPolicy;
