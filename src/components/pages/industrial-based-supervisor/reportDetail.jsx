import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { network } from "../../../config/config";
import styled from "styled-components";
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
const Comment = styled.textarea`
  float: right;
`;
const Form = styled.div`
  box-shadow: 1px 1px 5px -1px;
  margin: 20px;
  border: 1px solid white;
  overflow: auto;
`;
const Button = styled.button`
  float: right;
  margin: 3px;
`;
export const ReportDetails = () => {
  const { _id } = useParams();
  const [report, setReport] = useState([]);
  const fetchReport = async () => {
    await fetch(`${network.serverip}/get-report?_id=${_id}`)
      .then((response) => response.json())
      .then((result) => {
        setReport(result.data);
      })
      .catch((error) => console.log("s error", error.message));
  };

  useEffect(() => {
    fetchReport();
  }, []);
  return (
    <Wrapper>
      <SubWrapper>
        <Form>
          <form action="">
            <Day>
              <label htmlFor="">Monday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                disabled="true"
                placeholder="briefly describe the activity done"
                value={report?.mon}
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
                disabled="true"
                placeholder="briefly describe the activity done"
                value={report?.tue}
              ></textarea>{" "}
            </Day>
            <Day>
              <label htmlFor="">Wednesday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                disabled="true"
                placeholder="briefly describe the activity done"
                value={report?.wed}
              ></textarea>{" "}
            </Day>
            <Day>
              <label htmlFor="">Thursday</label> <br />
              <textarea
                style={{ borderRadius: 10, margin: 5, width: "100%" }}
                name=""
                id=""
                cols="100"
                rows="3"
                disabled="true"
                placeholder="briefly describe the activity done"
                value={report?.thu}
              ></textarea>{" "}
              <br />
              <input type="file" name="" id="" placeholder="" /> <br /> <br />
              <label htmlFor="">Date: {report?.date} </label>
              <Button>Submit</Button>
              <Comment
                cols="50"
                rows="2"
                placeholder="Make comment"
              ></Comment>{" "}
              <br /> <br /> <br />
              <label htmlFor="">Date: </label>
              <input type="date" name="" id="" />
            </Day>
            <br />
          </form>
        </Form>
      </SubWrapper>
    </Wrapper>
  );
};
