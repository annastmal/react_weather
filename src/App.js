import './App.css';
import SubmitForm from "./components/SubmitForm";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";
import "./styles.css";

export default function App() {
  return (
    <div className="container pt-5 w-50">
      <div className="container border rounded ">
        <div className="row">
          <WeatherCard />
          <div class="col-8 secondary-data text-white ">
            <WeatherForecast />
            <SubmitForm />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

