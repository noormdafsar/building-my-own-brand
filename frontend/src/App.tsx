import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import {CartProvider} from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;