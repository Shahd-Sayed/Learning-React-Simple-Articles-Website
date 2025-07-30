import Header from "./components/Header";
import Item from "./components/Item";
import data from "./data.js";

function App() {
  const res = data.map((item, i) => {
    return (
      <>
        <Item {...item} key={item.id} />
        {i !== data.length - 1 && <hr/>}
      </>
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
