import { useParams } from "react-router-dom";

function Chart() {
  const { coinId } = useParams<"coinId">();
  return (
    <>
      <h1>Chart ({coinId})</h1>
    </>
  );
}

export default Chart;