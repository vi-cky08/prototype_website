import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";

import {
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function PendingApproval() {

  const [status, setStatus] = useState("pending");

  const [message, setMessage] = useState(
    "Your registration is waiting for admin approval."
  );

  useEffect(() => {

    const notificationToken = sessionStorage.getItem(
      "approvalNotificationToken"
    );

    if (!notificationToken) return;

    const socket = io("http://localhost:5000", {
      auth: {
        notificationToken,
      },
    });

    socket.on("account-approved", (data) => {
      setStatus("approved");
      setMessage(data.message);

      sessionStorage.removeItem(
        "approvalNotificationToken"
      );
    });

    socket.on("account-rejected", (data) => {
      setStatus("rejected");
      setMessage(data.message);

      sessionStorage.removeItem(
        "approvalNotificationToken"
      );
    });

    return () => {
      socket.disconnect();
    };

  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">

        {status === "pending" && (
          <Clock className="mx-auto mb-5 text-amber-500" size={55} />
        )}

        {status === "approved" && (
          <CheckCircle className="mx-auto mb-5 text-green-600" size={55} />
        )}

        {status === "rejected" && (
          <XCircle className="mx-auto mb-5 text-red-600" size={55} />
        )}

        <h1 className="text-2xl font-bold text-slate-900">

          {status === "pending"
            ? "Registration Under Review"
            : status === "approved"
            ? "Account Approved!"
            : "Registration Rejected"}

        </h1>

        <p className="mt-4 text-slate-600">
          {message}
        </p>

        {status === "pending" && (
          <p className="mt-4 text-sm text-amber-600">
            Please wait. Our Admin team is reviewing your registration.
          </p>
        )}

        {status === "approved" && (
          <Link
            to="/login"
            className="mt-7 inline-block rounded-lg bg-[#102f62] px-7 py-3 font-semibold text-white"
          >
            Login Now
          </Link>
        )}

        {status === "rejected" && (
          <Link
            to="/contact"
            className="mt-7 inline-block rounded-lg bg-[#102f62] px-7 py-3 font-semibold text-white"
          >
            Contact Support
          </Link>
        )}

      </div>
    </main>
  );
}