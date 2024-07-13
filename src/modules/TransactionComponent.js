

import TransCell from "./TransCell";



const TransactionComponent = (props) => {

    return(
        <div className='transaction'>
        <h2>Transactions</h2>
        {props.transactions?.length > 0 ? (
          props.transactions.map((payload) => (
            <TransCell key={payload.id} payload={payload} />
          ))
        ) : (
          <p>No Transactions Yet</p>
        )}
      </div>
    );
};

export default TransactionComponent;