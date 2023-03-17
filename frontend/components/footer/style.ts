import styled from "styled-components";

export const Wrapper = styled.footer`
  height: 400px;
  width: 100%;

  background: ${(props) => props.theme.palette.common.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding: 30px 0px 30px 0;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    flex-direction: row;
    padding: 0 150px;
  }

  img {
    order: 1;
    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      order: 2;
    }
  }
`;

export const SocialItem = styled.a`
  background: ${(props) => props.theme.palette.common.white};
  border-radius: 50%;

  width: 37px;
  height: 37px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    width: 90px;
    height: 90px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  order: 3;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 205px;
    order: 1;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    width: 285px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    width: 367px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const Privacy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 10px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 33px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  margin-bottom: 7px;

  background: ${(props) => props.theme.palette.common.white};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 6px;
    margin-bottom: 14px;
  }
`;

export const Text = styled.p`
  font: normal normal 300 9px/11px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.white};
  opacity: 1;
  margin: 0;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 13px/16px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal 300 18px/22px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal 300 24px/29px var(--font-montserrat);
  }
`;

export const Menu = styled.div`
  max-width: 215px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  order: 2;
  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    max-width: 257px;
    order: 3;
    justify-content: space-between;
  }
`;

export const Item = styled.span`
  text-align: left;
  font: normal normal 300 24px/29px var(--font-montserrat);
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.white};
  opacity: 1;
  margin: 6px 10px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 27px/32px var(--font-montserrat);
    margin: 6px 0px;
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal 300 30px/36px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal 300 32px/39px var(--font-montserrat);
  }
`;
