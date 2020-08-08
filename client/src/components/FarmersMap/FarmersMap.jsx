import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  GoogleApiWrapper,
  Map,
  Marker,
  InfoWindow,
} from 'google-maps-react';
import { defaultCoordinates, googleApiKey } from '../../config';

const FarmersMap = ({
  google,
  style,
  farmers,
}) => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (farmer, marker) => {
    setSelectedPlace(farmer);
    setActiveMarker(marker);
    setIsInfoWindowOpen(true);
  };

  const onMapClicked = () => {
    if (isInfoWindowOpen) {
      setIsInfoWindowOpen(false);
      setActiveMarker({});
      setSelectedPlace({});
    }
  };

  return (
    <div
      style={{
        ...style,
      }}
    >
      <Map
        onClick={onMapClicked}
        google={google}
        zoom={11}
        initialCenter={defaultCoordinates}
        containerStyle={{
          position: 'relative',
          minWidth: '300px',
          minHeight: '300px',
        }}
      >
        {farmers.map(farmer => farmer.latitude && (
          <Marker
            // eslint-disable-next-line no-shadow
            onClick={({ farmer }, marker) => onMarkerClick(farmer, marker)}
            key={farmer.name}
            farmer={farmer}
            title={farmer.name}
            position={{
              lat: farmer.latitude,
              lng: farmer.longitude,
            }}
          />
        ))}
        <InfoWindow
          marker={activeMarker}
          visible={isInfoWindowOpen}
        >
          <div>
            <h4>{selectedPlace?.name}</h4>
            {selectedPlace?.description}
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

FarmersMap.propTypes = {
  google: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  farmers: PropTypes.array.isRequired,
};

export default GoogleApiWrapper({
  apiKey: googleApiKey,
})(FarmersMap);
