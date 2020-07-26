type TransactionObj =  {
  id: number,
  sourceAccount: string,
  targetAccount: string,
  amount: number,
  category: string,
  time: string
}

export const findDuplicateTransactions = (transactions: null | TransactionObj[] = []):TransactionObj[][] => {

  let currentTransactions = [...transactions];
  if(transactions.length === 0) {
    return [];
  }
  
  const findDuplicates = (transactions: TransactionObj[]):TransactionObj[] | null => {
    if(transactions.length === 0) {
      return null;
    }

    return transactions.filter(transaction => {
      const { sourceAccount, targetAccount, amount, category } = transaction;
      const transactionsComparition = (transactions[0].sourceAccount === sourceAccount && 
      transactions[0].targetAccount === targetAccount && 
      transactions[0].amount === amount && 
      transactions[0].category === category);

      return transactionsComparition ? transaction : null;
      }) 
  }

  const makeGroupsByDate = (duplicatesArray: TransactionObj[]):TransactionObj[] => {
    return duplicatesArray.sort((a, b) => {
      return parseDateToMS(a.time) - parseDateToMS(b.time);
    });
  }

  const removeAGroupOfDuplicates = (transactions: TransactionObj[]):TransactionObj[] | null => {
    return transactions.filter(transaction => {
      const { sourceAccount, targetAccount, amount, category } = transaction;
      const transactionsComparition = transactions[0].sourceAccount !== sourceAccount ||
        transactions[0].targetAccount !== targetAccount ||
        transactions[0].amount !== amount ||
        transactions[0].category !== category
        return transactionsComparition ? transaction : null;
    });
  }

  const parseDateToMS = (time: string):number => Date.parse(time);

  const sortDuplicatestoGroupByTime = (duplicatesGroup: TransactionObj[] | null):TransactionObj[][] | null => {
    if(duplicatesGroup.length <= 1) {
      return null;
    }

    const intersections = [0];
    const groups = [];

    for(let i = 0; i < duplicatesGroup.length - 1; i++) {
      if( ((parseDateToMS(duplicatesGroup[i + 1].time) - parseDateToMS(duplicatesGroup[i].time)) / 1000) > 60 ) {
        intersections.push(i+1);
      };
    }
    intersections.forEach((_, index) => {
      let subgroup = duplicatesGroup.slice(intersections[index], intersections[index + 1]);
      if(subgroup.length > 1) {
        groups.push(subgroup);
      }
    });
    return groups;
    }

  let result = sortDuplicatestoGroupByTime((makeGroupsByDate(findDuplicates(currentTransactions))));

  if(result !== null){
    return result = result.concat(findDuplicateTransactions(removeAGroupOfDuplicates(currentTransactions)))
  } else {
    return result = findDuplicateTransactions(removeAGroupOfDuplicates(currentTransactions));
  }
}