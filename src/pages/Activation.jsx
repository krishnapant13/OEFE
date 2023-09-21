import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../server";
import styles from "../styles/styles";
const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          console.log(res.data.message);
        } catch (error) {
          console.log(error.response.data.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired</p>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p>Your account has been created successfully</p>
          <Link to="/login">
            <div className={`${styles.button} m-3 !rounded-[4px] text-white`}>
              Login
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ActivationPage;
