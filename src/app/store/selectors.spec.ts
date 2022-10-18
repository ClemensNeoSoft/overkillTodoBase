import {State} from './reducer';
import {selectTodos} from './selectors';

describe('Selectors', () => {
  const initialState: State = {
   todos: [
     {title: 'todo1Title', isClosed: true, description:"test"},
     {title: 'todo2Title', isClosed: false, description: "test 123"},
   ]
  };

  it('should select todos list', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual(initialState.todos);
  });
});
