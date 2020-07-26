type transactionObj =  {
  id: number,
  sourceAccount: string,
  targetAccount: string,
  amount: number,
  category: string,
  time: string
}

export const getBalanceByCategoryInPeriod = (
  transactionsList: transactionObj[] = [],
  category: string,
  startTime: string,
  endTime: string
):number => {
  if (transactionsList.length === 0) {
    return 0;
  }

  const startTimeInMs = Date.parse(startTime);
  const endTimeInMs = Date.parse(endTime);

  return transactionsList.filter(transaction => {
      const transactionTimeInMs = Date.parse(transaction.time);
      return transaction && transactionTimeInMs >= startTimeInMs && transactionTimeInMs <= endTimeInMs
  })
  .filter(transaction => {
      return transaction && transaction.category === category;
  })
  .reduce((sum, transaction) => {
      return sum +  transaction.amount
  }, 0)
}
