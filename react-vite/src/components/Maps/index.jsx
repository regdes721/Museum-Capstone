import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey, getGeoKey } from '../../redux/maps';
import Maps from './Maps';

const MapContainer = (address) => {
  const key = useSelector((state) => state.maps.key);
  const geoKey = useSelector((state) => state.maps.geoKey)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  useEffect(() => {
    if (!geoKey) {
      dispatch(getGeoKey());
    }
  }, [dispatch, geoKey]);

  if (!key || !geoKey) {
    return null;
  }

  return (
    <Maps apiKey={key} geoKey={geoKey} address={address.address} />
  );
};

export default MapContainer;
