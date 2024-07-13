import { useState } from "react";


const AddTransactionView = (props) => {
     const [amount,setAmount]=useState("");
     const[desc,setDesc]=useState("");
     const[type,setType]=useState("EXPENSE");

     const addTransaction = () => {
        props.addTransaction({
            amount:Number(amount),
            desc,
            type,
            id:Date.now(),
        });
         props.toggleAddTxn();
     };

    return(
        <div className="addtranscontainer">
           <input placeholder="Amount" 
           value={amount} 
           type="number"
           onChange={(e)=>setAmount(e.target.value)}/>
           <input placeholder="Description" 
           value={desc} 
           onChange={(e)=>setDesc(e.target.value)}/>

           <div className="radiobox">
             <input 
             type="radio" 
             id="expense" 
             name="type" 
             value="EXPENSE" 
             checked={type==="EXPENSE"}
             onChange={(e)=>setType(e.target.value)}/>
             <label htmlFor="expense">Expense</label>
             <input 
             type="radio" 
             id="income" 
             name="type" 
             value="INCOME" 
             checked={type==="INCOME"}
             onChange={(e)=>setType(e.target.value)}/>
             <label htmlFor="income" >Income</label>
           </div>
           <div className="addtrans" onClick={(addTransaction)}>Add Transaction</div>
        </div>
    );
};

const OverviewComponent = (props) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(false);
    return (
        <div className='overview'>
            <div className="balance">
                Balance: ${props.income - props.expense}
                <div className="addtrans" onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel" : "ADD"}</div>
            </div>
            {isAddTxnVisible && (
            <AddTransactionView 
            toggleAddTxn={toggleAddTxn} 
            addTransaction={props.addTransaction}/>) }

            <div className="expensecontain">
                <div className="expensebox" isIncome={false}>
                   Expense<span>${props.expense}</span>
                </div>
                <div className="expensebox" isIncome={true}>
                   Income<span>${props.income}</span>
                </div>
            </div>
            
        </div>
    );
}

export default OverviewComponent;