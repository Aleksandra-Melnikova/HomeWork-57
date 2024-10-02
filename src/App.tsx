import ToolBar from './components/ToolBar/ToolBar.tsx';


const App = () => {
  // const [dishes, setDishes] = useState<IDish[]>([
  //   {
  //     id: "1",
  //     name: "Plov",
  //     description: "taste",
  //     price: 200,
  //     urlImage:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
  //   },
  //   {
  //     id: "1",
  //     name: "Pizza",
  //     description: "cheese",
  //     price: 500,
  //     urlImage:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
  //   },
  //   {
  //     id: "1",
  //     name: "Shaurma",
  //     description: "---",
  //     price: 250,
  //     urlImage:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
  //   },
  // ]);
  //
  // const addNewDish = (newDish: IDish) => {
  //   setDishes((prevState) => [...prevState, newDish]);
  // };
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      {/*<main className="container mt-4">*/}
      {/*  <div className="row">*/}
      {/*    <div className="col-6 mb-2">*/}
      {/*      <DishForm addNewDish={addNewDish} />*/}
      {/*    </div>*/}
      {/*    <div className="col-6 mb-2">*/}
      {/*      <Dishes dishes={dishes} />*/}
      {/*    </div>*/}
      {/*  }
      {/*  </div>*/}
      {/*</main>*/}
    </>
  );
};

export default App
