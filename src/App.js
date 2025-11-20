import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./pages/GlobalStyles";
import Appointment from "./pages/Appointment";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hospital from "./pages/Hospital";
import Diag from "./pages/Diag";
import My from "./pages/My";
import Ing from "./pages/Ing";
import Result from "./pages/Result";
import Appointment_2 from "./pages/Appointment_2";
import Complete_H from "./pages/Complete_H";
import Transport from "./pages/Transport";
import Complete_T from "./pages/Complete_T";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointment/hospital" element={<Hospital />} />
        <Route path="/appointment/hospital/check" element={<Appointment_2 />} />
        <Route path="/appointment/hospital/complete" element={<Complete_H />} />
        <Route path="/appointment/transport" element={<Transport />} />
        <Route path="/appointment/transport/complete" element={<Complete_T />} />
        <Route path="/home" element={<Main />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/diagnosis" element={<Diag />} />
        <Route path="/my" element={<My />} />
        <Route path="/diagnosis/ing" element={<Ing />} />
        <Route path="/diagnosis/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
