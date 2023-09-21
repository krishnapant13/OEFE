import React, { useEffect } from "react";
import ShopLogin from "../components/ShopLogin/ShopLogin.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/dashboard`);
    }
  }, [isSeller, isLoading, navigate]);

  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
