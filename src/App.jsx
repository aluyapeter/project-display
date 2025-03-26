import Header from "./components/Header";
import Body from "./components/Body";
import projectData from "./projectData";

function App() {
  const dataMod = projectData.map((item) => <Body key={item.id} {...item} />);

  return (
    <>
      <Header />
      {dataMod}
    </>
  );
}

export default App;
