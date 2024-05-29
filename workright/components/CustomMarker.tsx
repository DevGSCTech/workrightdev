import { View, Text } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';

const CustomMarker = ({ job, onPress }: { job: any, onPress: any }) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: job.latitude,
        longitude: job.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: 'InterBold' }}>$ {job.price * job.numberOfHours}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;