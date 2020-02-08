import React from 'react';
import Header from './components/Header';
import QuestionNavigator from './components/QuestionNavigator';
import BirdContainer from './components/BirdContainer';
import AppCard from './ui/AppCard';
import AnswersList from './components/AnswerList';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        {/* questions list */}
        <QuestionNavigator />
        {/* current question */}
        <AppCard>
          <BirdContainer />
        </AppCard>
        <div className="row py-3">
          <section className="col-md-5">
            <AnswersList />
          </section>
          <section className="col-md-7 row">
            <BirdContainer />
          </section>
        </div>
        <section>
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Next song
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
