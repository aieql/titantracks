import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Alert text="heading">
        <Button label="Success" />
      </Alert>
    </div>
  );
};

export default App;
