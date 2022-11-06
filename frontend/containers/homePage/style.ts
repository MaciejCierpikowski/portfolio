import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  @media screen and (max-width: ${(props) => props.theme.sizes.laptop}) {
    flex-direction: column;
  }
`;

export const WrapperInfo = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10vw;

  @media screen and (max-width: ${(props) => props.theme.sizes.laptop}) {
    height: 50%;
    width: 100%;
    padding: 0 5vw;
  }
`;

export const WrapperPhoto = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.sizes.laptop}) {
    height: 50%;
    width: 100%;
  }
`;

export const Photo = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Header = styled.h1`
  font-size: 3rem;
  margin: 10px 0 5px 0;
  letter-spacing: 1px;

  @media screen and (max-width: ${(props) => props.theme.sizes.laptop}) {
    font-size: 2rem;
  }
`;

export const SubHeaderWrapper = styled.div`
  display: flex;
  font-size: 2rem;
  margin: 5px 0 10px 0;
  @media screen and (max-width: ${(props) => props.theme.sizes.laptop}) {
    font-size: 1rem;
  }
`;

export const SubHeader = styled.h1`
  white-space: nowrap;
  margin: auto 0;
  letter-spacing: 1px;
`;

export const Inline = styled.span`
  align-self: center;
  font-family: "Bungee", sans-serif;
  font-size: 3.01rem;
  padding-left: 10px;
  letter-spacing: 1px;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: ${(props) => props.theme.palette.common.orange};
  -webkit-text-fill-color: ${(props) => props.theme.palette.common.white};
  text-shadow: 2px 2px 4px ${(props) => props.theme.palette.common.orange};

  @media screen and (max-width: ${(props) => props.theme.sizes.laptop}) {
    font-size: 1.5rem;
  }
`;

export const Headline = styled.div`
  background-color: ${(props) => props.theme.palette.common.orange};
  font-family: "Bungee", sans-serif;
  padding: 5px 10px;
  width: fit-content;
  margin: 25px 0 5px 0;
  letter-spacing: 1px;
`;

export const Text = styled.p`
  width: 430px;
  text-align: justify;
  margin: 5px 0 25px 0;
  color: ${(props) => props.theme.palette.common.gray};

  @media screen and (max-width: ${(props) => props.theme.sizes.laptop}) {
    width: 100%;
  }
`;
