import Footer from "../Footer";
import Person from "../Person";
import Title from "../Title"; 

const App = () => {
  const title = "Welcome to My App";

  return (
    <div>
      <Title title={title} />
      <Person />
      <Footer />
    </div>
  );
};

export default App;
