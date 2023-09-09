import "./App.css";
import { Navbar } from "./components/Navbar";
import { CustomButton } from "./ui/CustomButton";

import { InstagramOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomButton onClick={() => console.log("test")} label="Test" />
      <CustomButton
        onClick={() => console.log("test")}
        label="Test"
        type="link"
      />
      <CustomButton
        onClick={() => console.log("test")}
        icon={<InstagramOutlined />}
        type="icon"
      />
    </div>
  );
}

export default App;
