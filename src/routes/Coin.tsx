//Coin.tsx
import styled from "styled-components";

import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.2em;
  color: #333;
  font-weight: bold;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
`;

const Text = styled.div`
  background-color: #fff;
  margin: 8px 0;
  padding: 15px 20px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(57, 177, 241, 0.1);

  font-weight: 600;
  font-size: 25px;
  color: rgba(33, 200, 247, 0.7);
  &:hover {
    box-shadow: 0 16px 16px rgba(224, 255, 20, 0.1);
    transform: translateY(-2px);
  }
`;
interface RouteParms {
  coinId: string;
}
interface RouteState {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParms>();
  const { state } = useLocation<RouteState>();
  const [type, setType] = useState("coin");

  return (
    <Container>
      <Header>
        <Title>코인ID [{coinId}]</Title>
      </Header>
      <br />
      <Text> 이름 : {state?.name || "loading"}</Text>
      <Text> 순위 : {state?.rank || "loading"}</Text>
      <Text>거래 가능 여부 : {state?.is_active ? "거래 중" : "거래 중단"}</Text>
      <Text> 타입 : {state?.type || "loading"}</Text>
    </Container>
  );
}
export default Coin;
