import {Injectable} from 'angular2/core';

export class Activity {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class ActivityService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Activity(1, 'Lawn Tennis'),
  new Activity(2, 'Crocodile High Tea'),
  new Activity(3, 'Artichoke Throwing'),
  new Activity(4, 'Egg Sniffing'),
  new Activity(5, 'Colour Naming'),
  new Activity(6, 'Eyeball Rolling'),
  new Activity(7, 'Coffee Perking'),
  new Activity(8, 'Toffee Chewing')

  
];

let promise = Promise.resolve(mock);
