import React from 'react';
const Bill = ({ bill }) => {
    /*
      Instruments are added to watchlists with the help of a dropdown list <select>.
      Add a <option> element with value=-1 in the <select> list that will serve as the default option.
      "value" property corresponds to index of a watchlist in the filteredWatchlists list.
      When user clicks an entry, the onChange of the <select> is triggered which will call createWatchlistInstrument.
      If user clicks default option, then nothing should happen which is why we check for watchlistIdx == -1
      in the createWatchlistInstrument function.
    */
    return (
        <tr>
            {/* Render the Bill's details */}
            <td>{bill.payment_id}</td>
            <td>{bill.payment_date}</td>
            <td>{bill.amount}</td>
            <td>{bill.bill.bill_id}</td>
            <td>{bill.bill.bill_date}</td>
            <td>{bill.bill.amount}</td>
            <td>{bill.bill.remaining}</td>
        </tr>
    )
}

export default Bill