import { data } from '../data';
import { makeQuestions } from './myLib';

describe('makeOptions:', () => {
  it('it should return array of length equal to third parameter', () => {
    for (let i = 0; i < 5; i++) {
      const count = i;
      const array = makeQuestions(data, 6, count);
      expect(array.length).toBe(count);
    }
  });
  for (let i = 1; i < 6; i++) {
    it(`it should return array of arrays of length must be equal to the second parameter. Try portion = ${i}`, () => {
      const portion = i;
      const count = 5;
      const array = makeQuestions(data, portion, count);
      array.forEach(el => expect(el.length).toBe(portion));
    });
  }

  let prev = '';
  for (let i = 1; i < 10; i++) {
    it(`it should have random correct answer position, Try: ${i}`, () => {
      const portion = 5;
      const count = 5;
      const array = makeQuestions(data, portion, count);
      const currAnswersPos = [];
      array.forEach(q =>
        q.forEach((a, pos) => {
          if (a.correct) currAnswersPos.push(pos);
        })
      );
      const curr = JSON.stringify(currAnswersPos);
      expect(curr !== prev).toBe(true);
      prev = JSON.stringify(currAnswersPos);
    });
  }

  it('it should have unique answers', () => {
    for (let i = 1; i < 10; i++) {
      const portion = 5;
      const count = 5;
      const array = makeQuestions(data, portion, count);
      array.forEach(el => {
        expect([...new Set(el.map(item => item.id))].length).toBe(portion);
      });
    }
  });
});
