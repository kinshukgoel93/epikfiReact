import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Watchlist: undefined;
  Details: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Watchlist'>;



interface Post {
  id: string;
  author: string;
  time: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: '1',
    author: 'Ray Sparks',
    time: '1h',
    title: "Motivation's Effect On Mental And Physical Health",
    content: "Making changes in your life is great and it is the way we grow and develop as people. Change is a constant process and part of being human.",
    likes: 456,
    comments: 17,
  },
  {
    id: '2',
    author: 'Tommy Davidson',
    time: 'Yesterday',
    title: "Regional Cuisine Down Home Southern Cooking",
    content: "If you are considering purchasing a new grill, or barbecue, you will be faced with a multitude of options to choose between. However, there is one choice...",
    likes: 254,
    comments: 526,
  },
];

 const WatchlistFeed: React.FC<Post> = ({ author, time, title, content, likes, comments }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.footer}>
        <Text style={styles.likes}>{likes} ❤️</Text>
        <Text style={styles.comments}>{comments} 💬</Text>
      </View>
    </View>
  );
};

export const Watchlist: React.FC = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <WatchlistFeed {...item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    fontSize: 16,
    color: '#333',
  },
  comments: {
    fontSize: 16,
    color: '#333',
  },
});