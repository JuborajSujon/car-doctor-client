const BookingRow = ({ order, handleDelete, handleConfirm }) => {
  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(order._id)}
          className="btn btn-square btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={order.image} alt={order.name} />
            </div>
          </div>
        </div>
      </td>
      <td>{order.service}</td>
      <td>{order.dueAmount}</td>
      <td>{order.date}</td>
      <th>
        {order.status === "confirm" ? (
          <button disabled className="btn btn-ghost btn-xs">
            Confirm
          </button>
        ) : (
          <button
            onClick={() => handleConfirm(order._id)}
            className="btn btn-ghost btn-xs">
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
