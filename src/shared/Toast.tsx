import type React from "react";
import "@styles/toast.css";
import { useEffect } from "react";

type ToastProps = {
  title: string;
  content: string;
  duration?: number;
};

export const Toast = ({ title, content, duration = 5000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {}, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
};
