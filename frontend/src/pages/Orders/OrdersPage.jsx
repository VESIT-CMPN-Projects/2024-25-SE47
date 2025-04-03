
import React from "react";
import OrderTable from "../../components/orders/OrderTable";
import ordersData from "../../data/orders.json";
import styles from "./OrdersPage.module.css"; // Import CSS Module

export default function OrdersPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Orders</h1>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search orders..."
          className={styles.searchInput}
        />
        <button className={styles.filterButton}>
          <i className={`fas fa-filter ${styles.filterIcon}`}></i>Filters
        </button>
      </div>
      <OrderTable orders={ordersData} />
    </div>
  );
}
