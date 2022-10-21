import './styles.css';
import SubmitForm from './components/SubmitForm';
import Footer from './components/Footer';
export default function App() {
  return (
    <div className="container pt-5 w-50">
      <div className="container border rounded ">
        <div className="row">
          <SubmitForm defaultCity={"Lviv"}/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

