// ```
// activities.store.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// activities.store.js may be freely distributed under the MIT license
// ```

// # Redux store for `activities`

export interface Activity {
  _id: number;
  dates: Array<Object>;
  tags: Array<Object>;
  title: string;
  description: string;
  rating: number;
  creator: string;
  ingredients: Array<Object>;
  directions: Array<Object>;
};
