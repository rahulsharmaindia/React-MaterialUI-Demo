export const simplifyUserData = (data) => {
  const columns = [
    {
      id: "id",
      label: "ID",
      minWidth: 100,
    },
    {
      id: "accountHolderType",
      label: "Account Holder Type",
      minWidth: 120,
    },
    {
      id: "name",
      label: "Name",
      minWidth: 150,
    },
    {
      id: "accountType",
      label: "Account Type",
      minWidth: 150,
    },
    {
      id: "availableBalance",
      label: "Available Balance",
      minWidth: 180,
    },
    {
      id: "accountState",
      label: "Account State",
      minWidth: 120,
    },
    {
      id: "ViewDetails"
    },
  ];
  const rows = data.map((userData) => {
    return {
      id: userData.id,
      accountHolderType: userData.accountHolderType,
      name: userData.name,
      accountType: userData.accountType,
      availableBalance: formatCurrency(userData.availableBalance,userData),
      accountState: userData.accountState,
    };
  });
  const allData = data.map((userData) => {
    return {
      id: userData.id,
      accruedInterest: formatCurrency(userData.accruedInterest,userData),
      activationDate: simplifyDate(userData.activationDate),
      balance: formatCurrency(userData.balance,userData),
      currencyCode: userData.currencyCode,
      accruedInterest: formatCurrency(userData.accruedInterest,userData),
      overdraftInterestAccrued: formatCurrency(userData.overdraftInterestAccrued,userData),
      technicalOverdraftInterestAccrued: formatCurrency(userData.technicalOverdraftInterestAccrued,userData),
      overdraftAmount: formatCurrency(userData.overdraftAmount,userData),
      technicalOverdraftAmount: formatCurrency(userData.technicalOverdraftAmount,userData),
      interestDue: formatCurrency(userData.interestDue,userData),
      technicalInterestDue: formatCurrency(userData.technicalInterestDue,userData),
      feesDue: formatCurrency(userData.feesDue,userData),
      overdraftLimit: formatCurrency(userData.overdraftLimit,userData),
      lockedBalance: formatCurrency(userData.lockedBalance,userData),
      holdBalance: formatCurrency(userData.holdBalance,userData),
      allowOverdraft: userData.allowOverdraft,
    };
  });
  return { columns: columns, rows: rows, allData: allData };
};

export const simplifyDate = (date) => {
  let event = JSON.stringify(new Date(date));
  let dateString = event.slice(1, 11);
  let mydate = new Date(dateString);
  return mydate.toDateString();
};
export const formatCurrency = (amount, userData) => {
  return userData.currency.currencySymbolPosition=="BEFORE_NUMBER"?userData.currency.symbol+" "+userData.availableBalance:userData.availableBalance+" "+userData.currency.symbol
}
