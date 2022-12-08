import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId: urlCoinId } = useParams<"coinId">();
  const { coinId } = useOutletContext<ChartProps>();

  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart {coinId} {urlCoinId}</h1>;
}

export default Chart;