import type React from "react";
import "@styles/toasty.css";
import { useEffect, useRef } from "react";

type Error = {
  title: string;
  message: string;
  code: number;
  onClose: () => void;
};

type ToastProps = {
  title: string;
  message: string;
  duration?: number;
};

type ToastErrorProps = {
  error: Error;
  duration?: number;
};

export const Toasty = ({
  title,
  message,
  duration = 5000,
}: ToastProps) => {
  const containerRef = useRef<HTMLButtonElement>(null);

  function hideContainer() {
    if (containerRef) containerRef.current?.classList.add("hidden");
  }

  function handleContainerClick() {
    hideContainer();
  }

  useEffect(() => {
    const timer = setTimeout(() => hideContainer(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <button
      ref={containerRef}
      className="toasty-container"
      onClick={() => handleContainerClick()}
    >
      <div className="toasty">
        <h1 className="toasty-header">{title}</h1>
        <h3 className="toasty-content">{message}</h3>
      </div>
    </button>
  );
};

export const ToastyError = ({ error, duration = 5000 }: ToastErrorProps) => {
  const containerRef = useRef<HTMLButtonElement>(null);

  function hideContainer() {
    if (containerRef) containerRef.current?.classList.add("hidden");
  }

  function handleContainerClick() {
    hideContainer();
  }

  useEffect(() => {
    const timer = setTimeout(() => hideContainer(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  console.log(containerRef);
  return (
    <button
      ref={containerRef}
      className="toasty-container"
      onClick={() => handleContainerClick()}
    >
      <div className="toasty">
        <h1 className="toasty-header">{error.title}</h1>

        <h3 className="toasty-content">
          {error.message}
          <span>{error.code}</span>
        </h3>
      </div>
    </button>
  );
};
