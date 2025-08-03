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

  return (
    <section className="wallet-page">
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
          className="charge-button  btn btn-primary w-100 p-2 d-flex align-items-center justify-content-center gap-2"
          to={
            chargeAmount === 0 || chargeAmount === ""
              ? ""
              : `https://api.dalilwejhtak.com.sa/payment/${chargeAmount}/wallet?Authorization=${token}&Redirect_url=${window.location.href}`
          }
        >
          {t("wallet.chargeNow")}
          <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <div className="transactions-list mb-4">
          <h4 className="title">{t("wallet.transtactionsTitle")}</h4>

          {walletOperations?.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-light fw-bold ">
                  <tr>
                    <th>{t("wallet.amount")}</th>
                    <th>{t("wallet.date")}</th>
                    <th>{t("wallet.operation")}</th>
                  </tr>
                </thead>
                <tbody>
                  {walletOperations.map((operation) => (
                    <tr key={operation?.id}>
                      <td className="text-primary">
                        {t("sar")} {operation?.amount}
                      </td>
                      <td>{formatDate(operation?.created_at)}</td>
                      <td
                        className={
                          operation.operation === "charge"
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {t(operation?.operation)}
                        {operation?.operation === "charge" ? " ▲" : " ▼"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-transactions text-center">
              <img src="/w-icons/no-transcations.svg" alt="No transactions" />
              <p>{t("wallet.no_transactions")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
