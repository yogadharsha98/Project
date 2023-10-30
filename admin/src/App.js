import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns,flightsColumns,flightBookingColumns, retreatBookingColumns, retreatColumns, hotelBookingColumns, eventBookingColumns, eventColumns } from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import NewFlight from './pages/newFlight/NewFlight'
import NewRetreat from "./pages/newRetreat/NewRetreat";
import NewEvent from "./pages/newEvent/NewEvent";
import EditUser from "./pages/EditUser/EditUser";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotelBooking">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelBookingColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="flights">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={flightsColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewFlight />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="flightBooking">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={flightBookingColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewFlight />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="retreat">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={retreatColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRetreat />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="retreatBooking">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={retreatBookingColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRetreat />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="event">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={eventColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewEvent />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="eventBooking">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={eventBookingColumns}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewEvent />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="edit" element={<ProtectedRoute>
                    <EditUser />
                  </ProtectedRoute>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
