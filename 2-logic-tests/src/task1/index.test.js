import { getBalanceByCategoryInPeriod } from './';

describe('Task1', () => {
  it('returns 0 if there are no transactions', () => {
    const result = getBalanceByCategoryInPeriod(
      [],
      'groceries',
      '2018-03-01T10:34:30.000Z',
      '2018-03-31T10:34:30.000Z',
    );

    expect(result).toEqual(0);
  });

  it('returns 0 if there are no transactions in selected date period', () => {
    const INPUT = [{
      id: 1,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -30,
      category: 'groceries',
      time: '2019-03-12T12:34:00Z'
    }];

    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'groceries',
      '2018-03-01T10:34:30.000Z',
      '2018-03-03T10:34:30.000Z',
    );

    expect(result).toEqual(0);
  });

  it('returns 0 if there are no transactions in the selected category', () => {
    const INPUT = [
      {
      id: 1,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -30,
      category: 'groceries',
      time: '2019-03-12T12:34:00Z'
    },
      {
      id: 2,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'games',
      time: '2019-03-12T12:34:00Z'
    },
      {
      id: 3,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -150,
      category: 'fuel',
      time: '2019-03-12T12:34:00Z'
    },
  ];

    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'health',
      '2018-03-01T10:34:30.000Z',
      '2018-03-03T10:34:30.000Z',
    );

    expect(result).toEqual(0);
  });


  it('returns -280 for below INPUT', () => {
    const INPUT = [
      {
      id: 1,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -30,
      category: 'groceries',
      time: '2019-03-12T12:34:00Z'
    },
    {
      id: 2,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'groceries',
      time: '2019-04-12T12:34:00Z'
    },
    {
      id: 3,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -100,
      category: 'groceries',
      time: '2019-05-12T12:34:00Z'
    },
    {
      id: 4,
      sourceAccount: 'my_account',
      targetAccount: 'bp_station',
      amount: 300,
      category: 'car',
      time: '2019-04-12T12:35:00Z'
    },
    {
      id: 5,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -100,
      category: 'groceries',
      time: '2019-06-12T12:34:00Z'
    }
  ];

    const output = -280

    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'groceries',
      '2019-01-12T12:34:00Z',
      '2019-06-12T12:34:00Z',
    );

    expect(result).toEqual(output);
  });
});
