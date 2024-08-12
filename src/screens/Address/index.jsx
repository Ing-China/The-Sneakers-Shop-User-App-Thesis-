import React, {useEffect, useState} from 'react';
import {
  View,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './style'; // Ensure this path is correct

export default function Address() {
  const [initialRegion, setInitialRegion] = useState(null);
  const [markerCoordinate, setMarkerCoordinate] = useState(null);
  const [stateLatitude, setStateLatitude] = useState(0);
  const [stateLongitude, setStateLongitude] = useState(0);

  // Function to request location permissions
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs to access your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  // Fetch the current location when component mounts
  useEffect(() => {
    requestLocationPermission();
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    }

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
        setStateLatitude(latitude);
        setStateLongitude(longitude);
        setMarkerCoordinate({
          latitude,
          longitude,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        loadingEnabled
        showsUserLocation={true}
        showsMyLocationButton={true}
        region={initialRegion}
      />
      <Image
        source={require('../../assets/gif/location_pin.gif')}
        style={styles.markerImage}
      />
    </View>
  );
}
