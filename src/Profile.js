import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" style={styles.iconBack} />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
        }}>
        <View style={styles.infoRowContainer}>
          <Image
            source={require('./assets/avatar.jpg')}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.textName}>leemer.d.sabo</Text>
            <Text style={styles.textJob}>Photographer</Text>
            <View style={styles.buttonInteractionContainer}>
              <TouchableOpacity style={styles.buttonFollowContainer}>
                <Text style={styles.textFollow}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSendContainer}>
                <Ionicons name="paper-plane-outline" style={styles.iconSend} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.numberInfoContainer}>
          <View style={styles.numberInfoItem}>
            <Text style={styles.textMajor}>210</Text>
            <Text style={styles.textSub}>Photos</Text>
          </View>
          <View style={styles.numberInfoItem}>
            <Text style={styles.textMajor}>15k</Text>
            <Text style={styles.textSub}>Followers</Text>
          </View>
          <View style={styles.numberInfoItem}>
            <Text style={styles.textMajor}>142</Text>
            <Text style={styles.textSub}>Following</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            {imgData.slice(0, centerImgData).map((item) => (
              <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 10 }}>
                <Image
                  key={item.id}
                  source={item.imgSource}
                  resizeMode="cover"
                  style={[{ height: 200, width: '100%', borderRadius: 15 }]}
                />
              </View>
            ))}
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            {imgData.slice(centerImgData).map((item) => (
              <View style={{ paddingTop: 20, paddingRight: 20, paddingLeft: 10 }}>
                <Image
                  key={item.id}
                  source={item.imgSource}
                  resizeMode="cover"
                  style={[{ height: 200, width: '100%', borderRadius: 15 }]}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const imgData = [
  { id: 0, imgSource: require('./assets/image1.jpg') },
  { id: 1, imgSource: require('./assets/image2.jpg') },
  { id: 2, imgSource: require('./assets/image3.jpg') },
  { id: 3, imgSource: require('./assets/avatar.jpg') },
  { id: 4, imgSource: require('./assets/image5.jpg') },
  { id: 5, imgSource: require('./assets/image4.jpg') },
];

const centerImgData = Math.floor(imgData.length / 2);

const styles = StyleSheet.create({
  textMajor: {
    fontSize: 20,
    color: 'black',
  },
  textSub: {
    color: 'gray',
  },
  numberInfoItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInfoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: null,
    height: 50,
    padding: 10,
  },
  iconBack: {
    fontSize: 28,
    color: 'gray',
  },
  infoRowContainer: {
    padding: 30,
    paddingTop: 10,
    flexDirection: 'row',
  },
  infoTextContainer: {
    paddingLeft: 20,
  },
  textName: {
    fontSize: 24,
  },
  textJob: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 10,
  },
  buttonInteractionContainer: {
    flexDirection: 'row',
  },
  buttonFollowContainer: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: 'rgb(71,113,246)',
    borderRadius: 17,
  },
  textFollow: {
    fontSize: 15,
    color: 'white',
  },
  buttonSendContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'rgb(120,213,250)',
    borderRadius: 17,
    marginLeft: 10,
  },
  iconSend: {
    fontSize: 19,
    color: 'white',
  },
});
