import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import QuestionNavigator from './components/QuestionNavigator';
import Question from './components/Question';
import AnswersList from './components/AnswerList';
import Information from './components/Information';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <main>
          {/* questions list */}
          <QuestionNavigator />
          {/* current question */}
          <Question />
          <div className="row py-3">
            <section className="col-md-5">
              <AnswersList />
            </section>
            <Information />
          </div>
          <section>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Next song
            </button>
          </section>
        </main>
      </div>
    </Provider>
  );
}

export default App;
