import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faInfo, faInfoCircle, faSlidersH, faStar, faStepBackward, faStepForward, faTimesCircle } from '@fortawesome/fontawesome-free-solid';
import { faCalendar, faPauseCircle, faPlayCircle, faStar as faStarO } from '@fortawesome/fontawesome-free-regular';

const mapTextToIcon = {
  acknowledgements: faInfoCircle,
  back: faStepBackward,
  complete: faStar,
  close: faTimesCircle,
  forward: faStepForward,
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
