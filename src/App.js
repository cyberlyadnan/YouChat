import { useEffect, useState } from "react";
import Main from "./components/Chat Page/Main";
import Loader from "../src/components/Loader";
import backgrounImage from "../src/assets/images/chatBackgroundDark.png";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./components/Login-Register Page/Login";
import Notification from "./components/Notification/Notification";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Provider } from "react-redux";
import appStore from "./utils/Store/store";

function App() {
  const [loading, setLoading] = useState(true);

  const RouterList = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      error: <h1>Failed To Load</h1>,
    },
    {
      path: "/login",
      element: <Login />,
      error: <h1>Failed To Load</h1>,
    },
  ]);


  
  useEffect(() => {
    // Set a timer for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  

  if (loading) {
    return (
      <div
        className="w-full h-[100vh] p-6"
        style={{ backgroundImage: `url('${backgrounImage}')` }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div
      className="w-full h-[100vh] p-6"
      style={{ backgroundImage: `url('${backgrounImage}')` }}
    > 
    <Provider store={appStore}>
      <RouterProvider router={RouterList} />
      <Notification />
      </Provider>
    </div>
  );
}

export default App;
