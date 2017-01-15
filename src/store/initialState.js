let categoriesCount = 0;
const initialState = {
  transactions: [{
    id: new Date('2016-12-27').getTime(),
    date: new Date('2016-12-27'),
    amount: 23,
    type: "income"
  }, {
    id: new Date('2016-12-22').getTime(),
    date: new Date('2016-12-22'),
    amount: 2,
    type: "expenses"
  }, {
    id: new Date('2016-12-06').getTime(),
    date: new Date('2016-12-06'),
    amount: 3,
    type: "expenses"
  }, {
    id: new Date('2016-11-23').getTime(),
    date: new Date('2016-11-23'),
    amount: 9,
    type: "income"
  }, {
    id: new Date('2016-11-15').getTime(),
    date: new Date('2016-11-15'),
    amount: 11,
    type: "expenses"
  }, {
    id: new Date('2016-11-09').getTime(),
    date: new Date('2016-11-09'),
    amount: 12,
    type: "income"
  }],
  categories: [{
    id: categoriesCount++,
    name: "first"
  }, {
    id: categoriesCount++,
    name: "second"
  }]
};

export default initialState;
