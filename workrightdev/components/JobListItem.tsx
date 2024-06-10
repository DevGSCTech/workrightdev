import React from 'react';
import {  StyleSheet, Image, ViewStyle, Text, View   } from 'react-native';

import jobs from '../assets/data/jobs.json';

type JobListItem = {
  job: (typeof jobs)[0];
  containerStyle?: ViewStyle;
};

const JobListItem = ({
  job,
  containerStyle,
}: JobListItem) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: job.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.description}>{job.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>$ {job.price}/hr ({job.numberOfHours} hours)</Text>
          <Text style={styles.price}> ★{job.rating} stars</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',

    flexDirection: 'row',
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    width: 150,
    aspectRatio: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontFamily: 'InterBold',
    marginBottom: 10,
    fontSize: 16,
  },
  description: {
    color: 'gray',
  },
  price: {
    fontFamily: 'InterBold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});

export default JobListItem;