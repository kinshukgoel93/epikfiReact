import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Shortcuts = () => {
  const shortcuts = [
    { name: 'Helpdesk', icon: 'help-circle' },
    { name: 'Facilities', icon: 'tennisball' },
    { name: 'Guidelines', icon: 'book' },
    { name: 'Post', icon: 'create' },
  ];

  return (
    <View style={styles.container}>
      {shortcuts.map((item, index) => (
        <View key={index} style={styles.shortcutItem}>
          <Icon name={item.icon} size={30} />
          <Text style={styles.shortcutText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  shortcutItem: {
    alignItems: 'center',
  },
  shortcutText: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default Shortcuts;
