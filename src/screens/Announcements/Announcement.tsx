import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Announcement = () => {
  const announcements = [
    {
      title: 'Swimming Pool Under Maintenance',
      time: '2hrs ago',
      details: 'Dear Residents, This weekend the swimming pool will be under maintenance.',
    },
    {
      title: 'New Year Celebration',
      time: '2hrs ago',
      details: 'Please join us for the celebration to ring in the New Year.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Announcements</Text>
      {announcements.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardTime}>{item.time}</Text>
          <Text style={styles.cardDetails}>{item.details}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  cardDetails: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default Announcement;
