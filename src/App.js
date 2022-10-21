import './styles.css';
import Form from "./components/Form";
import "./styles.css";
import SubmitForm from './components/SubmitForm';

export default function App() {
  return (
    <div className="container pt-5 w-50">
      <div className="container border rounded ">
        <div className="row">
          <SubmitForm defaultCity={"Lviv"}/>
          <Form />
        </div>
      </div>
    </div>
  );
}

