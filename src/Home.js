import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from './components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import Post from './components/Post';

export default function Home() {
  return (
    <View>
      <Header />
      <ScrollView style={styles.container}>
        {feedData.map((feed) => (
          <Post key={feed.id} data={feed} />
        ))}
      </ScrollView>
    </View>
  );
}

const feedData = [
  {
    id: 0,
    name: 'leemer.d.sabo',
    image: require('./assets/image1.jpg'),
    likeCount: 128,
    avatar: require('./assets/avatar.jpg'),
  },
  {
    id: 1,
    name: '_n.anh_',
    image: require('./assets/image2.jpg'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg'),
  },
  {
    id: 2,
    name: '_ladykiller',
    image: require('./assets/image3.jpg'),
    likeCount: 14,
    avatar: require('./assets/avatar.jpg'),
  },
];

const styles = StyleSheet.create({
  container: {
    marginBottom: 50
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
