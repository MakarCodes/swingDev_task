import { findDuplicateTransactions } from '.';

describe('Task2', () => {
  it('returns empty array if there are no transactions', () => {
    expect(findDuplicateTransactions([])).toEqual([]);
  });

  it('returns empty array if there are no duplicates', () => {
    const INPUT = [
      {
        id: 3,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:34:30.000Z'
      },
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'D',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 6,
        sourceAccount: 'A',
        targetAccount: 'E',
        amount: 250,
        category: 'eating_out',
        time: '2018-03-02T10:33:05.000Z'
      },
      {
        id: 4,
        sourceAccount: 'A',
        targetAccount: 'F',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:36:00.000Z'
      },
      {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'G',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:50.000Z'
      },
      {
        id: 5,
        sourceAccount: 'A',
        targetAccount: 'H',
        amount: 250,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      }
    ];

    expect(findDuplicateTransactions(INPUT)).toEqual([]);
  });


  it('returns empty array if there are duplicates but time beetwen transactions is longer then 60sec', () => {
    const INPUT = [
      {
        id: 3,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:34:30.000Z'
      },
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 6,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:36:05.000Z'
      },
      {
        id: 4,
        sourceAccount: 'A',
        targetAccount: 'F',
        amount: 250,
        category: 'shopping',
        time: '2018-03-02T10:36:00.000Z'
      },
      {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'F',
        amount: 250,
        category: 'shopping',
        time: '2018-03-02T10:43:50.000Z'
      },
      {
        id: 5,
        sourceAccount: 'A',
        targetAccount: 'F',
        amount: 250,
        category: 'shopping',
        time: '2018-03-02T10:30:00.000Z'
      }
    ];
    expect(findDuplicateTransactions(INPUT)).toEqual([]);
  });

  it('returns two groups of transactions in correct order', () => {
    const INPUT = [
      {
        id: 3,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:30.000Z'
      },
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 4,
        sourceAccount: 'A',
        targetAccount: 'D',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:30.000Z'
      },
      {
        id: 5,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:34:00.000Z'
      },
      {
        id: 6,
        sourceAccount: 'A',
        targetAccount: 'Z',
        amount: 200,
        category: 'sport',
        time: '2018-03-02T10:33:30.000Z'
      },
      {
        id: 7,
        sourceAccount: 'A',
        targetAccount: 'Z',
        amount: 200,
        category: 'sport',
        time: '2018-03-02T10:34:00.000Z'
      }
    ];

    const output = [
      [
        {
          id: 1,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:33:00.000Z'
        },
        {
          id: 3,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:33:30.000Z'
        },
        {
          id: 5,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:34:00.000Z'
        }
      ],
      [
        {
          id: 6,
          sourceAccount: 'A',
          targetAccount: 'Z',
          amount: 200,
          category: 'sport',
          time: '2018-03-02T10:33:30.000Z'
        },
        {
          id: 7,
          sourceAccount: 'A',
          targetAccount: 'Z',
          amount: 200,
          category: 'sport',
          time: '2018-03-02T10:34:00.000Z'
        }
      ]
    ]
    expect(findDuplicateTransactions(INPUT)).toEqual(output);
  });

  it('returns three groups of transactions in correct order', () => {
    const INPUT = [
      {
          id: 3,
          sourceAccount: 'A',
          targetAccount: 'B',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:34:30.000Z'
      },
      {
          id: 1,
          sourceAccount: 'A',
          targetAccount: 'B',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:33:00.000Z'
      },
      {
          id: 6,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 250,
          category: 'other',
          time: '2018-03-02T10:33:05.000Z'
      },
      {
          id: 4,
          sourceAccount: 'A',
          targetAccount: 'B',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:36:00.000Z'
      },
      {
          id: 2,
          sourceAccount: 'A',
          targetAccount: 'B',
          amount: 100,
          category: 'eating_out',
          time: '2018-03-02T10:33:50.000Z'
      },
      {
          id: 5,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 250,
          category: 'other',
          time: '2018-03-02T10:33:00.000Z'
      },
      {
          id: 7,
          sourceAccount: 'D',
          targetAccount: 'B',
          amount: 300,
          category: 'shopping',
          time: '2018-03-02T10:34:00.000Z'
      },
      {
          id: 8,
          sourceAccount: 'D',
          targetAccount: 'B',
          amount: 300,
          category: 'shopping',
          time: '2018-03-02T10:33:50.000Z'
      },
      {
          id: 9,
          sourceAccount: 'E',
          targetAccount: 'F',
          amount: 250,
          category: 'food',
          time: '2018-03-02T10:33:00.000Z'
      }
    ];
    

    const output = [
        [
          {
              id: 1,
              sourceAccount: 'A',
              targetAccount: 'B',
              amount: 100,
              category: 'eating_out',
              time: '2018-03-02T10:33:00.000Z'
          },
          {
            id: 2,
            sourceAccount: 'A',
            targetAccount: 'B',
            amount: 100,
            category: 'eating_out',
            time: '2018-03-02T10:33:50.000Z'
          },
          {
            id: 3,
            sourceAccount: 'A',
            targetAccount: 'B',
            amount: 100,
            category: 'eating_out',
            time: '2018-03-02T10:34:30.000Z'
        }
      ],
      [
        {
          id: 5,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 250,
          category: 'other',
          time: '2018-03-02T10:33:00.000Z'
        },
        {
          id: 6,
          sourceAccount: 'A',
          targetAccount: 'C',
          amount: 250,
          category: 'other',
          time: '2018-03-02T10:33:05.000Z'
        }
      ],
      [
        {
          id: 8,
          sourceAccount: 'D',
          targetAccount: 'B',
          amount: 300,
          category: 'shopping',
          time: '2018-03-02T10:33:50.000Z'
        },
        {
          id: 7,
          sourceAccount: 'D',
          targetAccount: 'B',
          amount: 300,
          category: 'shopping',
          time: '2018-03-02T10:34:00.000Z'
        }
      ]
    ]
    expect(findDuplicateTransactions(INPUT)).toEqual(output);
  });
});
