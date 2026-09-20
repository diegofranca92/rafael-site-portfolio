"use client";

import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          setLoading(false);
        }, 700);
      }, 5500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-9999 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"
        }`}
    >
      <Loading />
    </div>
  );
}