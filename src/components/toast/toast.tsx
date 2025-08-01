"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateApp } from "../../redux/slices/app";
import "./toast.scss";

export const Toast = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector((state) => state.app.errorMessage);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(updateApp({ errorMessage: null }));
      }, 3000);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div className="toast-container p-2" id={`toast-${message.type}`}>
      <div className="text-end">
        <button
          type="button"
          className="bg-transparent text-white"
          onClick={() => dispatch(updateApp({ errorMessage: null }))}
        >
          x
        </button>
      </div>
      <div className="toast-content">
        <Image
          src="/images/icons/warning-circle.svg"
          alt={message.text}
          width={17}
          height={17}
        />
        <p className="text-white">{message.text}</p>
      </div>
      <div className="progress-bar"></div>
    </div>
  );
};
