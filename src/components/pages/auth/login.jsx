import { useState } from "react";
import "../auth/login.css";
import { Form, Btn, ErrorMsg, ErrorMsgContainer, TxtField } from "../../form";
import { Route, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";
import { useCookies } from "react-cookie";
export const NavLink = styled(Link)`
  color: blue;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookies] = useCookies(["user"]);
  const navigate = useNavigate();

  function Index() {
    setTimeout(() => {
      // 👇 Redirects to about page, note the `replace: true`
      navigate("/", { replace: true });
    }, 3000);
  }

  const handleSubmit = async (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    event.preventDefault();
    if (`${email}` === "" || `${password}` === "") {
      toast.error("please fill in all the reqiured fields", {
        position: toast.POSITION.TOP_CENTER,
      });
      // document
      //   .getElementById("error")
      //   .insertAdjacentHTML("beforeend", "<div><h1> Hello world</h1></div>");
    } else {
      if (`${email}`.includes("@") && `${email}`.includes(".")) {
        const user = { email, password };
        const response = await axios.post("http://localhost:4000/login", user);
        if (response.data.status === 200) {
          setCookies("token", response.data.data.token, {
            maxAge: 28800,
            path: "/",
          });
          setCookies("id", response.data.data._id, {
            maxAge: 28800,
            path: "/",
          });
          setCookies("email", response.data.data.email, {
            maxAge: 28800,
            path: "/",
          });
          setCookies("role", response.data.data.role, {
            maxAge: 28800,
            path: "/",
          });
          toast.success("Login Successfull", {
            position: toast.POSITION.TOP_CENTER,
          });
          setInterval(() => {
            window.location.replace("/student/add-report");
          }, 5000);

          console.log(response.data.data);
        } else {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        toast.error("please enter a valid email", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  return (
    <>
      <div className="bg1" style={{ overflow: "auto" }}>
        <Form class="  profileCard">
          <center>
            <h1>Login</h1>
          </center>
          <div class="mt-4">
            <TxtField
              className="txt"
              label="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br /> <br />
            <TxtField
              className="txt"
              label="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div>
              <ToastContainer style={{ marginTop: "35%" }} />
            </div>
            <Btn onClick={handleSubmit}>Submit</Btn>
          </div>
          <p>
            don't have an account? <br /> click
            <NavLink to="/register">here</NavLink>
            to signup.
          </p>
        </Form>
      </div>
    </>
  );
};
