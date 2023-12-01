import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/CoinsList";
import ChartLine from "./routes/ChartLine";
import ChartCandle from "./routes/ChartCandle";
import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="line" element={<ChartLine />} />
          <Route path="candle" element={<ChartCandle />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
