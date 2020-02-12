import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Main from '../Main';
import { MAX_SCORE } from '../../data';

describe('Report test: ', () => {
  it('it should work', () => {
    expect(true).toBe(true);
  });
  it('It should show win cake 🎂 if you get max score', async () => {
    const initialState = {
      birds: {
        loading: false,
        questions: [1, 2, 3, 4, 5],
        isGetCorrectAnswer: true,
        currentQuestionId: 4,
        totalScore: MAX_SCORE,
      },
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    expect(
      wrapper.contains(
        <span role="img" className="cake" aria-label="bird">
          🎂
        </span>,
      )).toBe(true);
  });

  it(`It should not show the win cake 🎂 if the
   maximum number of points is not scored `, async () => {
    const initialState = {
      birds: {
        loading: false,
        questions: [1, 2, 3, 4, 5],
        isGetCorrectAnswer: true,
        currentQuestionId: 4,
        totalScore: MAX_SCORE - 1,
      },
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    expect(
      wrapper.contains(
        <span role="img" className="cake" aria-label="bird">
          🎂
        </span>,
      ),
    ).toBe(false);
  });
});
