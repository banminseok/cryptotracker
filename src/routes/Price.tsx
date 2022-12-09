import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
`;

const Tab = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 30px;
  border-radius: 10px;
  color : ${(prop) => prop.theme.textColor};;
  span:first-child {
    font-size: 18px;
    font-weight: 600;
  }
  span:last-child {
    font-size: 20px;
    font-weight: 600;
  }
`;

interface ChartProps {
  coinId: string;
}

function Price({ coinId }: ChartProps) {
  //const { coinId } = useOutletContext<ChartProps>();

  const { isLoading, data } = useQuery(
    ["price", coinId],
    () => fetchCoinTickers(coinId),
  );
  const USD = data?.quotes.USD;
  return (
    <div>
      {isLoading ? (
        "Price Loading..."
      ) : (
        <>
          <Tabs>
            <Tab>
              <span>현재 가격</span>
              <span>{USD?.price.toFixed(6)} USD</span>
            </Tab>
            <Tab>
              <span>15분 전 대비</span>
              <span>{USD?.percent_change_15m.toFixed(2)} %</span>
            </Tab>
            <Tab>
              <span>30분 전 대비</span>
              <span>{USD?.percent_change_30m.toFixed(2)} %</span>
            </Tab>
            <Tab>
              <span>1시간 전 대비</span>
              <span>{USD?.percent_change_1h.toFixed(2)} %</span>
            </Tab>
            <Tab>
              <span>12시간 전 대비</span>
              <span>{USD?.percent_change_12h.toFixed(2)} %</span>
            </Tab>
            <Tab>
              <span>24시간 전 대비</span>
              <span>{USD?.percent_change_24h.toFixed(2)} %</span>
            </Tab>
            <Tab>
              <span>7일 전 대비</span>
              <span>{USD?.percent_change_7d.toFixed(2)} %</span>
            </Tab>
            <Tab>
              <span>30일 전 대비</span>
              <span>{USD?.percent_change_30d.toFixed(2)} %</span>
            </Tab>
          </Tabs>
        </>
      )}
    </div>
  );
}

export default Price;