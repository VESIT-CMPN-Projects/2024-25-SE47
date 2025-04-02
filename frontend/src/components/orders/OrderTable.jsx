// import OrderRow from './OrderRow';

// export default function OrderTable({ orders }) {
//   return (
//     <table className="w-full border-collapse">
//       <thead>
//         <tr className="bg-gray-100">
//           <th className="p-3 text-left">Order</th>
//           <th className="p-3 text-left">Date</th>
//           <th className="p-3 text-left">Customer</th>
//           <th className="p-3 text-left">Payment</th>
//           <th className="p-3 text-left">Total</th>
//           <th className="p-3 text-left">Delivery</th>
//           <th className="p-3 text-left">Items</th>
//           <th className="p-3 text-left">Fulfillment</th>
//           <th className="p-3 text-left">Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {orders.map((order) => (
//           <OrderRow key={order.id} order={order} />
//         ))}
//       </tbody>
//     </table>
//   );
// }
import React from "react";
import OrderRow from "./OrderRow";
import styles from "./OrderTable.module.css"; // Import CSS Module

export default function OrderTable({ orders }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>Order</th>
          <th className={styles.th}>Date</th>
          <th className={styles.th}>Customer</th>
          <th className={styles.th}>Payment</th>
          <th className={styles.th}>Total</th>
          <th className={styles.th}>Delivery</th>
          <th className={styles.th}>Items</th>
          <th className={styles.th}>Fulfillment</th>
          
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </tbody>
    </table>
  );
}
