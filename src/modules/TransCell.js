const TransCell = (props) => {
    const isExpense = props.payload?.type === "EXPENSE";
  const className = `cell ${isExpense ? 'expense' : 'income'}`; // Add class based on type
  return (
    <div className={className}>
      <span>{props.payload.desc}</span> <br></br>
      <span>${props.payload.amount}</span>
    </div>
    );
  };
  
  export default TransCell;
  