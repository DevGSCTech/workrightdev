import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import JobListItem from '@/components/JobListItem';
import CustomMarker from '@/components/CustomMarker';
import jobs from '@/assets/data/jobs.json';
import { Text, View } from '@/components/Themed';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

type Job = (typeof jobs)[0];

export default function TabThreeScreen() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(
    null
  );
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // variables
  const snapPoints = useMemo(() => [80, '50%', '90%'], []);

  return (
    <GestureHandlerRootView>
      <View>
      <MapView  style={styles.map} region={mapRegion}> 
      provider={PROVIDER_GOOGLE}
        {jobs.map((job) => (
          <CustomMarker
            key={job.id}
            job={job}
            onPress={() => setSelectedJob(job)}
          />
        ))}
      </MapView>

      {/* Display selected job */}
      {selectedJob && (
        <JobListItem
          job={selectedJob}
          containerStyle={styles.selectedContainer}
        />
      )}

      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {jobs.length} places</Text>
          <BottomSheetFlatList
            data={jobs}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <JobListItem job={item} />}
          />
        </View>
      </BottomSheet>
    </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  listTitle: {
    textAlign: 'center',
    fontFamily: 'InterSemi',
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
  selectedContainer: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    left: 10,
  },
});
