import Form from "./week21_hw3/App";
import Gobang from "./week21_hw2/App";
import TodoList from "./week21_hw1/App";
import React from "react";
import styled from "styled-components";

function App() {
  const PresentWrapper = styled.div`
    padding: 0px;
    maggin: 0px;
  `;

  const [presend, setpresend] = React.useState("");

  const HwOne = () => {
    return (
      <button
        onClick={() => {
          handleChange("todolist");
        }}
      >
        HW1
      </button>
    );
  };

  const HwTwo = () => {
    return (
      <button
        onClick={() => {
          handleChange("goband");
        }}
      >
        HW2
      </button>
    );
  };

  const HwThree = () => {
    return (
      <button
        onClick={() => {
          handleChange("form");
        }}
      >
        HW3
      </button>
    );
  };

  const Present = () => {
    return (
      <PresentWrapper>
        {presend === "todolist" && <TodoList />}
        {presend === "goband" && <Gobang />}
        {presend === "form" && <Form />}
      </PresentWrapper>
    );
  };
  const handleChange = (item) => {
    setpresend(item);
  };
  return (
    <PresentWrapper>
      <Present />
      <HwOne />
      <HwTwo />
      <HwThree />
    </PresentWrapper>
  );
}

export default App;
