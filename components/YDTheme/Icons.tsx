import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { lock } from 'react-icons-kit/icomoon';

//Customise iconsw
const SideIconContainer = withBaseIcon({
  size: 16,
  style: { color: '#242424' },
});

export const LockIcon = () => <SideIconContainer icon={lock} />;
