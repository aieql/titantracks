import ListGroup from "./components/ListGroup";

function AppList() {
  const cities = ["NYC", "SFO", "YVR"];
  const fruits = ["pomegranate", "mulberry", "starfruit"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={fruits}
        heading="Fruits"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default AppList;
