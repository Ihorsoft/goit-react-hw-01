export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((items, index) => {
            return (
              // <div key={items.id}>
              <tr key={items.id}>
                <td>{items.type}</td>
                <td>{items.amount}</td>
                <td>{items.currency} </td>
              </tr>
              // </div>
            );
          })}

          {/*  <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
