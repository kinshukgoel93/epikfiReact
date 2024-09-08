import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, Button, Icon } from 'react-native-elements';

type RootStackParamList = {
  Bespoke: undefined;
  Details: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Bespoke'>;

export function Bespoke({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.userName}>Ramakrishnan</Text>
        <View style={styles.investmentSummary}>
          <Text style={styles.investmentValue}>62,465</Text>
          <Text style={styles.investmentLabel}>Current Value</Text>
          <Text style={styles.investmentAmount}>Total Investment: 50,000</Text>
          <Button
            title="Invest More"
            buttonStyle={styles.investButton}
            titleStyle={styles.investButtonText}
          />
        </View>
      </View>

      {/* Fund Categories */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Fund Categories</Text>
        <View style={styles.categories}>
          <CategoryButton icon="folder" title="Equity Funds" />
          <CategoryButton icon="balance-scale" title="Balanced Funds" />
          <CategoryButton icon="cut" title="Tax Saving Funds" />
          <CategoryButton icon="briefcase" title="Debt Funds" />
        </View>
      </View>

      {/* Top Funds */}
      <View style={styles.fundsContainer}>
        <Text style={styles.sectionTitle}>Top Funds</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FundCard title="Equity Mutual Fund" value="12,532" />
          <FundCard title="Axis Mutual Fund" value="12,532" />
          <FundCard title="SBI Mutual Fund" value="12,532" />
        </ScrollView>
      </View>

      {/* Trending Funds */}
      <View style={styles.fundsContainer}>
        <Text style={styles.sectionTitle}>Trending Funds</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TrendingFundCard title="Mirae Asset Fund" value="12,532" />
          <TrendingFundCard title="Kotak Mutual Fund" value="12,532" />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

// Component for Category Buttons
const CategoryButton: React.FC<{ icon: string; title: string }> = ({ icon, title }) => (
  <TouchableOpacity style={styles.categoryButton}>
    <Icon name={icon} type="font-awesome" size={24} color="#fff" />
    <Text style={styles.categoryTitle}>{title}</Text>
  </TouchableOpacity>
);

// Component for Fund Cards
const FundCard: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <Card containerStyle={styles.fundCard}>
    <Card.Title>{title}</Card.Title>
    <Card.Divider />
    <Text style={styles.fundValue}>{value}</Text>
  </Card>
);

// Component for Trending Fund Cards
const TrendingFundCard: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <Card containerStyle={styles.trendingFundCard}>
    <Card.Title>{title}</Card.Title>
    <Card.Divider />
    <Text style={styles.fundValue}>{value}</Text>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4e4bb7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  userName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  investmentSummary: {
    backgroundColor: '#3a3898',
    padding: 20,
    borderRadius: 10,
  },
  investmentValue: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  investmentLabel: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 10,
  },
  investmentAmount: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 20,
  },
  investButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
  },
  investButtonText: {
    color: '#4e4bb7',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    backgroundColor: '#4e4bb7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  fundsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  fundCard: {
    width: 150,
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
  },
  trendingFundCard: {
    width: 200,
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
  },
  fundValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4e4bb7',
  },
});

