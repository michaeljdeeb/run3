import React from 'react';

import { H5 } from '../styles/headings';
import { DashedLI, UL } from '../styles/lists';

const BoldDashedLI = DashedLI.extend`
  font-weight: 700;
`;

const Disclaimer = () => (
  <div>
    <H5>
      Progressive Web App Limitations
    </H5>
    <UL>
      <BoldDashedLI>Add to your home screen before starting</BoldDashedLI>
      <BoldDashedLI>Run3 must stay open</BoldDashedLI>
      <BoldDashedLI>Your phone must stay unlocked</BoldDashedLI>
    </UL>
    <p>
      Pick your running playlist and finish those replies before starting your workout.
    </p>
  </div>
);

export default Disclaimer;
