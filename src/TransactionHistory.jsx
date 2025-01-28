import React, {useEffect} from "react";
import { useLogin } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const currency = (value, sign) => {
    if (typeof value !== "number") {
        value = value ? value.replace("₦", "").replace(",", "") : "";
    }

    value = value ? (isNaN(value) ? 0 : parseFloat(value)) : 0;
    return sign
        ? `${sign}` + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        : "₦" + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const TransactionHistory = () => {
    // Dummy transaction data
    const transactions = [
        {
            id: 1,
            date: "2025-01-01",
            description: "Cash Withdrawal",
            amount: 5000.0,
            type: "debit",
        },
        {
            id: 2,
            date: "2025-01-01",
            description: "DSTV Subscription",
            amount: 7500.0,
            type: "debit",
        },
        {
            id: 3,
            date: "2025-01-02",
            description: "Airtime Purchase",
            amount: 1000.0,
            type: "debit",
        },
        {
            id: 4,
            date: "2025-01-02",
            description: "Salary Deposit",
            amount: 15000.0,
            type: "credit",
        },
        {
            id: 5,
            date: "2025-01-03",
            description: "Electricity Bill Payment",
            amount: 3000.0,
            type: "debit",
        },
        {
            id: 6,
            date: "2025-01-03",
            description: "Transfer Received",
            amount: 20000.0,
            type: "credit",
        },
    ];

    const groupedTransactions = transactions.reduce((groups, transaction) => {
        const date = transaction.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
    }, {});

    const {isLoggedIn}  = useLogin()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLoggedIn) {
            toast.error("Login to Continue");
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">

            <div className="p-6 mb-6 bg-white rounded-lg shadow-md ">
                <h2 className="text-xl font-bold mb-2">Account Overview</h2>
                <p className="text-gray-700 mb-1">Balance: <span className="font-bold text-green-500">{currency(50000)}</span></p>
                <p className="text-gray-700 mb-1">Account Number: <span className="font-mono">1234567890</span></p>
                <p className="text-gray-700">Account Status: <span className="font-bold text-blue-500">Active</span></p>
            </div>

            <h1 className="text-2xl font-bold text-center mb-6">Transaction History</h1>
            <div className="space-y-6">
                {Object.entries(groupedTransactions).map(([date, transactions]) => (
                    <div key={date}>
                        <h2 className="text-lg font-bold text-gray-600 mb-4">{date}</h2>
                        <div className="space-y-4">
                            {transactions.map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm">{transaction.date}</span>
                                        <span
                                            className={`text-lg font-bold ${transaction.type === "debit" ? "text-red-500" : "text-green-500"
                                                }`}
                                        >
                                            {transaction.type === "debit" ? "-" : ""}{currency(transaction.amount)}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-gray-700 text-sm">{transaction.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionHistory;
