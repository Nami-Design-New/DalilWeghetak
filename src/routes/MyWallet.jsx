import React, { useState } from "react";

export default function MyWallet() {
  const [chargeAmount, setChargeAmount] = useState(25);

  const walletData = {
    balance: 3000,
    name: "TEST Admin App",
    transactions: [
      {
        id: 1,
        amount: 30,
        date: "5 نوفمبر 2024",
        type: "إيداع",
      },
      {
        id: 2,
        amount: 30,
        date: "5 نوفمبر 2024",
        type: "خصم",
      },
    ],
  };

  return (
    <section className="wallet-page mt-80">
      <div className="container">
        <h2 className="page-title mb-3">محفظتي</h2>
        <div className="wallet-card p-3 mb-4">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <p className="mb-1">Balance</p>
              <h3>SR {walletData.balance.toLocaleString()}</h3>
              <p className="mb-0">Name</p>
              <p>{walletData.name}</p>
            </div>
            <div className="wallet-icon">
              <i className="fa-regular fa-wallet fa-2x"></i>
            </div>
          </div>
        </div>

        <div className="transactions-list mb-4">
          {walletData.transactions.map((tx) => (
            <div key={tx.id} className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded">
              <span className="text-primary">ريال {tx.amount}</span>
              <span>{tx.date}</span>
              <span className={tx.type === "إيداع" ? "text-success" : "text-danger"}>
                {tx.type}
                {tx.type === "إيداع" ? " ▲" : " ▼"}
              </span>
            </div>
          ))}
        </div>

        <div className="charge-box p-3 border rounded mb-3">
          <label htmlFor="chargeInput" className="mb-2 d-block">شحن المحفظة</label>
          <div className="d-flex align-items-center gap-2">
            <input
              type="number"
              id="chargeInput"
              className="form-control"
              value={chargeAmount}
              onChange={(e) => setChargeAmount(e.target.value)}
            />
            <span>SR</span>
          </div>
        </div>

        <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
          اشحن الآن
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </section>
  );
}
