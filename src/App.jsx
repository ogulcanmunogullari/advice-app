import { GeneralProvider } from "./ContextGeneral";
import Search from "./Search";
import Modal from "./Modal";
function App() {
  return (
    <GeneralProvider>
      {/*  Yanyana gelecek */}
      <section>
        <Search />
        <Modal />
      </section>
    </GeneralProvider>
  );
}

export default App;
