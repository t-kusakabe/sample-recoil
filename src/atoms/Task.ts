import {atom} from 'recoil';

export interface Task {
  title: string;
  completed: boolean;
}

const initialTask: Task[] = [];

export const taskState = atom({
  key: 'task',
  default: initialTask
});
