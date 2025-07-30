import Header from "./components/Header";
import Item from "./components/Item";
import data from "./data.js";

function App() {
  const res = data.map((item, i) => {
    return (
      <div key={item.id}>
        <Item {...item} />
        {i !== data.length - 1 && <hr />}
      </div>
    );
  });

  return (
    <>
      <Header />
      {res}
    </>
  );
}

export default App;
