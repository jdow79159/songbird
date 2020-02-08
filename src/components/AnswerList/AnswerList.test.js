import React from 'react';
import { mount } from 'enzyme';
import AnswerList from './index';

describe('AnswerList:', () => {

  it('it should be 6 answers', () => {
    const wrapper = mount(<AnswerList />);
    expect(wrapper.find('.btn.btn-secondary.my-1').length).toBe(6);
  });

  it('after click on answer it should change it is color', () => {
    for (let i = 0; i < 6; i += 1) {
      const wrapper = mount(<AnswerList />);
      const el = wrapper.find('.btn.btn-secondary.my-1').at(i);
      el.simulate('click');
      expect(el.instance().className === 'btn btn-outline-success my-1'
     || el.instance().className === 'btn btn-outline-danger my-1').toBe(true);
    }
  });

  it('each answer should change color after click if not set correct answer', () => {
    const wrapper = mount(<AnswerList />);
    let setAnswered = false;
    wrapper.find('.btn.btn-secondary.my-1').forEach(el => {
      el.simulate('click');
      if (el.instance().className === 'btn btn-outline-success my-1') {
        setAnswered = true;
      }
      if (setAnswered) {
        expect(el.instance().className).not.toBe('btn btn-outline-danger my-1');
      }
    });
  });
});
