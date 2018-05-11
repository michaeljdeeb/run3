import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faInfo, faInfoCircle, faSlidersH, faStar } from '@fortawesome/fontawesome-free-solid';
import { faCalendar, faPauseCircle, faPlayCircle, faStar as faStarO } from '@fortawesome/fontawesome-free-regular';

const mapTextToIcon = {
  acknowledgements: faInfoCircle,
  complete: faStar,
  home: faInfo,
  incomplete: faStarO,
  pause: faPauseCircle,
  play: faPlayCircle,
  schedule: faCalendar,
  settings: faSlidersH,
};

const Icon = props => (
  <FontAwesomeIcon {...props} icon={mapTextToIcon[props.icon]} />
);

export default Icon;
