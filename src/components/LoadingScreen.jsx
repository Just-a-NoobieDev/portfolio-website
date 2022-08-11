import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 20px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  animation: morph 2s infinite;

  @keyframes morph {
    0%,
    100% {
      border-radius: 50%;
      transform: rotate(0deg);
      background-color: #f3bc19;
    }
    50% {
      border-radius: 0%;
      transform: rotate(180deg);
      background-color: #6da9f1;
    }
  }
`;

export const LoadingScreen = () => {
  return (
    <Container>
      <Spinner></Spinner>
      <h2>Loading...</h2>
    </Container>
  );
};
