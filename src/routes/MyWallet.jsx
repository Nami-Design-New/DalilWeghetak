import { useState } from "react";
import { Link } from "react-router";
import { formatDate } from "../utils/helpers";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import useGetProfile from "../hooks/account/useGetProfile";
import useGetWalletOperations from "../hooks/account/useGetWalletOperations";
import Loader from "../ui/loader/Loader";

export default function MyWallet() {
  const { t } = useTranslation();
  const [chargeAmount, setChargeAmount] = useState();
  const { walletOperations, isLoading } = useGetWalletOperations();
  const { data, isLoading: profileLoading } = useGetProfile();
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;

  if (isLoading || profileLoading) return <Loader />;

  console.log(walletOperations);

  return (
    <section className="wallet-page ">
      <div className="container">
        <h2 className="page-title mb-3">{t("dropdown.wallet")}</h2>
        <div className="wallet-card p-3 mb-4">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <p className="mb-1"> {t("wallet.balance")} </p>
              <h3>
                {t("sar")} {data.wallet}
              </h3>
              <p className="mb-0">
                <span> {t("wallet.name")} : </span> <span> {data.name} </span>{" "}
              </p>
            </div>
            <div className="wallet-icon">
              <i className="fa-regular fa-wallet fa-2x"></i>
            </div>
          </div>
        </div>

        <div className="transactions-list mb-4">
          {walletOperations.length > 0 ? (
            walletOperations.transactions.map((opertaion) => (
              <div
                key={opertaion.id}
                className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded"
              >
                <span className="text-primary">
                  {t("sar")} {opertaion.amount}
                </span>
                <span>{formatDate(opertaion.created_at)}</span>
                <span
                  className={
                    opertaion.operation === "charge"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {opertaion.operation}
                  {opertaion.operation === "charge" ? " ▲" : " ▼"}
                </span>
              </div>
            ))
          ) : (
            <div> {t("wallet.no_transactions")} </div>
          )}
        </div>

        <div className="charge-box p-3 border rounded mb-3">
          <label htmlFor="chargeInput" className="mb-2 d-block">
            {t("wallet.chargeWallet")}
          </label>
          <div className="d-flex align-items-center gap-2">
            <input
              placeholder="0.0"
              type="number"
              id="chargeInput"
              className="form-control"
              value={chargeAmount}
              onChange={(e) => setChargeAmount(e.target.value)}
            />
            <span>{t("sar")}</span>
          </div>
        </div>

        <Link
          className="btn btn-primary w-100 p-2 d-flex align-items-center justify-content-center gap-2"
          to={
            chargeAmount === 0 || chargeAmount === ""
              ? ""
              : `https://api.dalilwejhtak.com.sa/payment/${chargeAmount}/wallet?Authorization=${token}&Redirect_url=${window.location.href}`
          }
        >
          {t("wallet.chargeNow")}
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  );
}
