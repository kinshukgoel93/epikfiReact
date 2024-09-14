import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityBuzz = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Buzz</Text>
      <View style={styles.buzzItem}>
        <Text style={styles.buzzQuestion}>What's your favourite restaurant around our locality?</Text>
        <View style={styles.buzzAuthor}>
          <Text>Nikita Bisht</Text>
          <Text>08 Mar 2024, 10:39 AM</Text>
        </View>
      </View>
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
  buzzItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  buzzQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buzzAuthor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default CommunityBuzz;
