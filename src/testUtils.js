import React from 'react';
import { shallow } from 'enzyme';

export const shallowFactory = (Component, defaultProps = {}) => (props = {}, children = []) => (
  shallow(<Component {...defaultProps} {...props}>{children}</Component>)
);
