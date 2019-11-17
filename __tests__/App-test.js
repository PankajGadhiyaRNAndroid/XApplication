/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import XebiaApplication from '../src/components/Mainroutes/XebiaApplication';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<XebiaApplication />);
});
