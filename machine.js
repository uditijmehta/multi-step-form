import { createMachine } from 'xstate';

const formMachine = createMachine({
  id: 'form',
  initial: 'userInfo',
  states: {
    userInfo: {
      on: {
        NEXT: 'survey',
      },
    },
    survey: {
      on: {
        BACK: 'userInfo',
        NEXT: 'confirmation',
      },
    },
    confirmation: {
      on: {
        BACK: 'survey',
        SUBMIT: 'submitted',
      },
    },
    submitted: {
      type: 'final',
    },
  },
});

export default formMachine;
