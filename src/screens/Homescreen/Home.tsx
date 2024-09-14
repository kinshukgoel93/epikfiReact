import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from '../Header/Header';
import Shortcuts from '../Shortcuts/Shortcuts';
import Announcement from '../Announcements/Announcement';
import CommunityBuzz from '../CommunityBuzz/CommunityBuzz';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Shortcuts />
        <Announcement />
        <CommunityBuzz />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

