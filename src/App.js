import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import data from "./data";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Form,
  Input,
  Label,
} from "reactstrap";
import "react-toastify/dist/ReactToastify.min.css";
import AmountBar from "./AmountBar";
import "./App.css";
import List from "./List";
import FooterAmount from "./FooterAmount";

const App = () => {
  const [cAmount, setCAmount] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [list, setList] = useState(data);
  const [tPrice, setTPrice] = useState(0);
  useEffect(() => {
    toast.dark("🚀 App Loaded!");
    document.title = "Vending Machine!";
  }, []);

  const onSubmit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div style={{ textAlign: "center" }} className="bumba">
      <ToastContainer
        style={{ textAlign: "left" }}
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="pt-4">Welcome to Vending Machine</h1>
      <br />
      <Card style={{ textAlign: "left" }}>
        <CardBody>
          <CardTitle tag="h5">Enter amount of money You have :</CardTitle>
          <CardText>With which you can buy all the soda's we offer</CardText>
          <Form>
            <Label>
              Enter the Amount :
              <Input
                type="number"
                name="uAmount"
                id="uAmount"
                disabled={isEdit}
                placeholder="Amount"
                onChange={(e) => setCAmount(e.target.value)}
              ></Input>
            </Label>
            <Button style={{ marginLeft: "15px" }} onClick={onSubmit}>
              {isEdit ? "🔒 Locked" : "🔓 Unlocked"}
            </Button>
          </Form>
        </CardBody>
        <CardFooter>Note: We will make your pockets loose</CardFooter>
      </Card>
      <AmountBar isEdit={isEdit} cAmount={cAmount}></AmountBar>
      {cAmount <= 0 ? (
        <h1>🤑 Enter Amount First 🤑</h1>
      ) : (
        <>
          <List
            list={list}
            tPrice={tPrice}
            setTPrice={setTPrice}
            tPrice={tPrice}
          ></List>
          <br />
          <FooterAmount tPrice={tPrice}></FooterAmount>
        </>
      )}
    </div>
  );
};

export default App;