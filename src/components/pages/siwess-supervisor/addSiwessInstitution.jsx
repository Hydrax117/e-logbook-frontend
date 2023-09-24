import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { network } from "../../../config/config";
export const AddInstitution = () => {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [phone, setPhone] = useState("");

  const HandleSubmit = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      address: address,
      phone: phone,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    e.preventDefault();
    if (`${name}` === "" || `${address}` === "" || `${phone}` === "") {
      toast.error("please fill all the required fields");
    } else {
      fetch(`${network.serverip}/add-institution`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 200) {
            toast.success(result.message);
            setInterval(() => {
              window.location.reload();
            }, 5000);
          } else {
            toast.error(result.message);
          }
        })
        .catch((error) => toast.error(error.message));
    }
  };
  return (
    <>
      <div className="bg1">
        <div
          className="vh-70 mt-5 d-flex flex-column"
          style={{
            background: "white",
            overflow: "hidden",
            width: "60%",
            margin: "auto",
            height: "70vh",
            padding: "26px",
          }}
        >
          <center>
            <h1 className="mt-5">Add SIWESS INSTITUTION</h1>
          </center>
          <TextField
            className="mt-5"
            label="name"
            required="true"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            className="mt-5"
            label="Address"
            required="true"
            value={address}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          <TextField
            className="mt-5"
            label="Phone"
            required="true"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <div>
            <ToastContainer style={{ marginTop: "35%" }} />
          </div>

          <center>
            <button
              type="submit"
              className="btn btn-primary mt-5"
              onClick={HandleSubmit}
            >
              Add
            </button>
          </center>
        </div>
      </div>
    </>
  );
};
