import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';

const setUp = (props = {}) => shallow(<Form {...props} />);


describe('addPage component!', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe('check for rendering', () => {
    it('should have .formControl class', () => {
      const wrapper = component.find('.formControl');
      expect(wrapper.length).toBe(1);
    });
    it('should render input', () => {
      const input = component.find('.formInput');
      expect(input.length).toBe(1);
    });
    it('should render label', () => {
      const label = component.find('.labelForm');
      expect(label.length).toBe(1);
    });
    it('should render span', () => {
      const span = component.find('.spanForm');
      expect(span.length).toBe(1);
    });
  });

});
