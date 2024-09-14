import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Button, ListItem } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../../App';




export const Profile = () => {
  const { logout } = useContext(AuthContext);
  // Define the structure of menu items
  interface MenuItem {
    id: string;
    title: string;
    iconName: string;
  }

  // Define the array of menu items
  const menuItems: MenuItem[] = [
    { id: '1', title: 'My projects', iconName: 'folder' },
    { id: '2', title: 'Account', iconName: 'account-circle' },
    { id: '3', title: 'Share with friends', iconName: 'share' },
    { id: '4', title: 'Review', iconName: 'rate-review' },
    { id: '5', title: 'Info', iconName: 'info' },
  ];



  const handleLogout = async () => {
    await logout(); 
  };
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Icon name="settings" size={24} color="#000" style={styles.settingsIcon} />
        <Avatar
          rounded
          size="large"
          source={{ uri: 'https://via.placeholder.com/150' }}
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>Lloyd Haynes</Text>
        <Text style={styles.email}>callie_parisian@rosenbaum.ca</Text>
      </View>

      {/* Menu Items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <Icon name={item.iconName} size={24} color="#7b7b7b" />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />

      {/* Save Button */}
      <Button
        title="LOGOUT"
        onPressIn={() => handleLogout()}
        buttonStyle={styles.saveButton}
        containerStyle={styles.saveButtonContainer}
      />
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  settingsIcon: {
    position: 'absolute',
    left: 20,
    top: 40,
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#7b7b7b',
  },
  saveButtonContainer: {
    margin: 20,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#3366ff',
    paddingVertical: 15,
  },
});
