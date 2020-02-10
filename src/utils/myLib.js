function pad(string) {
  return `0${string}`.slice(-2);
}

export function format(seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
}

function shuffle(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
export function makeQuestions(sourceArr, portion = 6, count = 5) {
  const questions = [];
  const shuffleSource = shuffle(sourceArr);
  const shuffleSourceIdx = shuffleSource.map(el => el.id);
  const c = count < shuffleSourceIdx.length ? count : shuffleSourceIdx.length;
  for (let i = 0; i < c; i += 1) {
    const question = [];
    const correctAnswer = { ...shuffleSource[i], correct: true, clicked: false};
    question.push(correctAnswer);
    const otherShuffleSourceIdx = shuffleSourceIdx.filter(
      (el, index) => index !== i,
    );
    const portionIdx = shuffle(otherShuffleSourceIdx).slice(
      0,
      portion <= 0 ? 5 : portion - 1,
    );
    portionIdx.forEach(el => {
      const anotherAnswer = shuffleSource.find(item => item.id === el);
      anotherAnswer.correct = false;
      anotherAnswer.clicked = false;
      question.push(anotherAnswer);
    });
    questions.push(shuffle(question));
  }
  return questions;
}
