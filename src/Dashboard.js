import React from "react";
import Bill from "./Bill";
function Dashboard({bills}) {
    if (bills === [])
        return null
    

    return (
        <div>
            <div className='m-5 p-2 rounded regular-shadow' id="bills">
                <h2 className='ml-2'>Your Bills</h2>
                <table cellPadding={10}>
                    <tr>
                        <th>Payment Date</th>
                        <th>Payment Amount</th>
                        <th>Bill Id</th>
                        <th>Bill Date</th>
                        <th>Bill Amount</th>
                        <th>Remaining Amount</th>
                    </tr>
                    {
                        // Render each Bill as its separate component and for this you use the map() method
                        // Whenever you use the map() method to render a collection of Components, React requires that you specify a unique
                        // attribute of each component in this collection and for this case, we are using the id of each Bill as the key
                        // for React to uniquely identify each Bill
                        // We also pass on the Bill object that has to be rendered by the component and the payBill method that will
                        // execute the payment
                        bills.map(b =>
                            <Bill
                                bill={b}
                                key={b.billId}
                            />
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default Dashboard;