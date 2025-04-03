export default function OrderRow({ order }) {
    return (
      <tr>
        <td>#{order.id}</td>
        <td>{order.date}</td>
        <td>{order.customer}</td>
        <td>
          <span className={`payment-${order.payment}`}>
            <i className={`fas fa-circle ${order.payment === 'success' ? 'text-green-500' : 'text-yellow-500'}`}></i>
            {order.payment === 'success' ? 'Success' : 'Training'}
          </span>
        </td>
        <td>${order.total}</td>
        <td>{order.delivery}</td>
        <td>{order.items} {order.items > 1 ? 'items' : 'item'}</td>
        <td>
          <span className= {`fulfillment-${order.fulfillment}`}>
            {order.fulfillment === 'fulfilled' ? 'Fulfilled' : 'Unfulfilled'}
          </span>
        </td>
       
      </tr>
    );
  }