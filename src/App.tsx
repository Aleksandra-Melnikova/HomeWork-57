import ToolBar from './components/ToolBar/ToolBar.tsx';
import UserForm from './components/UsersForm/UserForm.tsx';


const App = () => {

  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main className="container mt-4">
       <div className="row">
         <div className="col-6 mb-2">*
          <UserForm/>*
         </div>
         <div className="col-6 mb-2">
        </div>

       </div>
      </main>
    </>
  );
};

export default App
