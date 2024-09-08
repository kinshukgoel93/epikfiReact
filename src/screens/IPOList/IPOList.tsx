import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  IPOList: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'IPOList'>;

export function IPOList({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
   

      {/* Create Demat Account */}
      <Card containerStyle={styles.dematCard}>
        <View style={styles.dematCardContent}>
          <Icon name="account-balance-wallet" size={30} color="#5b4bfc" />
          <View style={styles.dematText}>
            <Text>Create demat account</Text>
            <Text style={styles.createNowText}>Create now</Text>
          </View>
          <Icon name="chevron-right" size={30} color="#5b4bfc" />
        </View>
      </Card>

      {/* Ongoing IPOs */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Ongoing IPO's</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ipoList}>
        <Card containerStyle={styles.ipoCard}>
          <Image
            style={styles.ipoImage}
            source={{ uri: 'https://via.placeholder.com/50' }}
          />
          <Text style={styles.ipoTitle}>LIC IPO</Text>
          <Text style={styles.ipoDate}>20 Mar - 25 Mar, 2022</Text>
          <Text style={styles.ipoPriceRange}>Price Range</Text>
          <Text style={styles.ipoPrice}>₹1490 - 1530</Text>
          <View style={styles.ipoDetails}>
            <Text>Qty: 10</Text>
            <Text>Min Amount: ₹14950</Text>
          </View>
          <Button title="Apply" buttonStyle={styles.applyButton} />
        </Card>

        <Card containerStyle={styles.ipoCard}>
          <Image
            style={styles.ipoImage}
            source={{ uri: 'https://via.placeholder.com/50' }}
          />
          <Text style={styles.ipoTitle}>PharmEasy</Text>
          <Text style={styles.ipoDate}>20 Mar - 28 Mar, 2022</Text>
          <Text style={styles.ipoPriceRange}>Price Range</Text>
          <Text style={styles.ipoPrice}>₹530 - 560</Text>
          <View style={styles.ipoDetails}>
            <Text>Qty: 55</Text>
            <Text>Min Amount: ₹29150</Text>
          </View>
          <Button title="Apply" buttonStyle={styles.applyButton} />
        </Card>
      </ScrollView>

      {/* Upcoming IPOs */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming IPO's</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <Card containerStyle={styles.upcomingIPOCard}>
        <Image
          style={styles.ipoImage}
          source={{ uri: 'https://via.placeholder.com/50' }}
        />
        <View style={styles.upcomingIPOText}>
          <Text style={styles.upcomingIPOTitle}>Ixigo</Text>
          <Text style={styles.upcomingIPODate}>yet to be announced</Text>
        </View>
      </Card>
    </ScrollView>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#5b4bfc',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dematCard: {
    marginHorizontal: 16,
    borderRadius: 8,
  },
  dematCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dematText: {
    flex: 1,
    marginLeft: 16,
  },
  createNowText: {
    color: '#5b4bfc',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#5b4bfc',
  },
  ipoList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  ipoCard: {
    width: 200,
    borderRadius: 8,
    marginRight: 16,
  },
  ipoImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  ipoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ipoDate: {
    color: '#7b7b7b',
    marginBottom: 8,
  },
  ipoPriceRange: {
    color: '#7b7b7b',
  },
  ipoPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ipoDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  applyButton: {
    backgroundColor: '#5b4bfc',
    borderRadius: 4,
  },
  upcomingIPOCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 8,
  },
  upcomingIPOText: {
    marginLeft: 16,
  },
  upcomingIPOTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  upcomingIPODate: {
    color: '#7b7b7b',
  },
});
