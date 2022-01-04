
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MyCards from "./components/MyCards";

function MyCardRedirect() {
    return (
        <div>
              <Router>
              <Routes>
      <Route path='/MyCards' element={<MyCards/>} />
      </Routes>
              </Router>
        </div>
    )
}

export default MyCardRedirect;











