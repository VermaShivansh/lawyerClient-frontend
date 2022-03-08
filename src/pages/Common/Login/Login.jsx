import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Input from "../../../components/Input/Input";
import Label from "../../../components/Label/Label";
import PageContainer from "../../../components/PageContainer/PageContainer";
import Select from "../../../components/Select/Select";
import Title from "../../../components/Title/Title";
import { ROLES } from "../../../constants/roles";
import "./Login.scss";


const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" , role:"" });
  const options = {
    [ROLES.CLIENT]: "CLIENT",
    [ROLES.LAWYER]: "LAWYER",
}
  const onSubmit = (passedVal) => {
    console.log(passedVal);
  };

  return (
    <PageContainer className={"login-page"}>
      <div className="lc-gradient">
        <img
          // src={
          //   "https://media.istockphoto.com/photos/judge-gavel-and-scale-in-court-legal-concept-picture-id1090431444?k=20&m=1090431444&s=612x612&w=0&h=by_YZG3Mc-wnqx9bSpsKYMKOJkzRDW-WPDfGq8M_Y-o="
          // }
          src="./images/images.jpg"
          alt=""
        />
      </div>
      <div className="login-container">
        <Card className="login-box">
          <Title className="title">SIGN  IN</Title>
          <div className="select-box">
            <Label className="role">Who are you ?</Label>
            <Input type="select" name="role" value={input} setValue={setInput} options={options} isSearchable="true" />
          </div>
          <div className="input-box">
            <Label className="email">Email</Label>
            <Input
              name="email"
              placeholder="Registered mail ID"
              value={input}
              setValue={setInput}
            />
          </div>
          <div className="input-box">
            <Label className="password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={input}
              setValue={setInput}
            />
          </div>
          {/* <span className="error">{error}</span> */}
          <div className="buttons">
            <Button onClick={() => onSubmit(input)} id="login-btn">
              Sign in
            </Button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Login;
