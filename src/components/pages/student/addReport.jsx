import styled from "styled-components";
import { useState } from "react";
const Wrapper = styled.div`
  width: 100%;
`;

const SubWrapper = styled.div`
  width: 60%;
  margin: auto;
`;
const Day = styled.div`
  margin: 20px;
`;

const Form = styled.div`
  box-shadow: 1px 1px 5px -1px;
  margin: auto;
  border: 1px solid white;
  width: 80%;
  overflow: auto;
  height: 65vh;
  margin-top: 3%;
`;
export const AddReport = () => {
  const bg = require("../../../images/kasu.jpg");
  const [mon, setMon] = useState("");
  const array = [1, 2, 3, 4, 5];
  return (
    <Wrapper>
      <SubWrapper>
        <Form className="fadeIn">
          <h3 style={{ textAlign: "center", marginTop: "2%" }}>
            Add Weekly Progress Report
          </h3>
          <form action="">
            <Day>
              <label htmlFor="">Week Number:</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="i.e week 1,week ,week 3 ..."
                style={{ marginLeft: "10px" }}
              />
            </Day>
            <Day>
              <label htmlFor="">Monday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                placeholder="briefly describe the activity done"
                value={mon}
                onChange={(e) => setMon(e.target.value)}
              ></textarea>
            </Day>
            <Day>
              <label htmlFor="">Tuesday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                placeholder="briefly describe the activity done"
                value={mon}
                onChange={(e) => setMon(e.target.value)}
              ></textarea>
            </Day>
            <Day>
              <label htmlFor="">Wednesday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                placeholder="briefly describe the activity done"
                value={mon}
                onChange={(e) => setMon(e.target.value)}
              ></textarea>
            </Day>
            <Day>
              <label htmlFor="">Thursday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                placeholder="briefly describe the activity done"
                value={mon}
                onChange={(e) => setMon(e.target.value)}
              ></textarea>
            </Day>
            <Day>
              <label htmlFor="">Friday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                placeholder="briefly describe the activity done"
                value={mon}
                onChange={(e) => setMon(e.target.value)}
              ></textarea>
            </Day>
            <Day>
              <label htmlFor="">Saturday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                placeholder="briefly describe the activity done"
                value={mon}
                onChange={(e) => setMon(e.target.value)}
              ></textarea>{" "}
              <br />
              <input type="file" name="" id="" placeholder="" /> <br /> <br />
              <label htmlFor="">Date: </label>
              <input type="date" name="" id="" required />
            </Day>
          </form>
        </Form>
        <button>Submit</button>
      </SubWrapper>
    </Wrapper>
  );
};
