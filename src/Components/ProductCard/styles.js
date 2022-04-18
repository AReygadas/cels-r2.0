import styled from "styled-components";

const Color1 = "rgb(0, 231, 255)";
const Color2 = "rgb(255, 0, 231)";

export const CardContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  height: 90vh;
`;

export const Cardx = styled.div`
  width: 71.5vw;
  height: 100vw;
  position: relative;
  scroll-snap-align: center;
  margin: 20px;
  z-index: 10;
  touch-action: none;
  border-radius: 5%/3.5%;
  box-shadow: -5px -5px 5px -5px ${Color1}, 5px 5px 5px -5px ${Color2},
    -7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent,
    0 0 5px 0px rgba(255, 255, 255, 0), 0 55px 35px -20px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease, box-shadow 0.2s ease;
  will-change: transform, filter;
  background-color: #040712;
  background-image: var(--front);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transform-origin: center;

  @media (min-width: 600px) {
    width: clamp(12.9vw, 61vh, 18vw);
    height: clamp(18vw, 85vh, 25.2vw);
  }

  &:hover {
    box-shadow: -20px -20px 30px -25px var(--color1),
      20px 20px 30px -25px var(--color2), -7px -7px 10px -5px var(--color1),
      7px 7px 10px -5px var(--color2), 0 0 13px 4px rgba(255, 255, 255, 0.3),
      0 55px 35px -20px rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    background-repeat: no-repeat;
    opacity: 0.5;
    mix-blend-mode: color-dodge;
    transition: all 0.33s ease;
    cursor: pointer;
    opacity: 1;
    background-image: url("https://assets.codepen.io/13471/sparkles.gif"),
      url(https://assets.codepen.io/13471/holo.png),
      linear-gradient(
        125deg,
        #ff008450 15%,
        #fca40040 30%,
        #ffff0030 40%,
        #00ff8a20 60%,
        #00cfff40 70%,
        #cc4cfa50 85%
      );
    background-position: 50% 50%;
    background-size: 160%;
    background-blend-mode: overlay;
    z-index: 2;
    filter: brightness(1) contrast(1);
    transition: all 0.33s ease;
    mix-blend-mode: color-dodge;
    opacity: 0.75;
  }
  &::before {

    background-position: 50% 50%;
    background-size: 300% 300%;
    background-image: linear-gradient(115deg, transparent 0%, var(--color1) 25%, transparent 47%, transparent 53%, var(--color2) 75%, transparent 100%);
    opacity: 0.5;
    filter: brightness(0.5) contrast(1);
    z-index: 1;
  }
  
`;

export const ButtonCard = styled.button`
  background: #cb2540;
  color: #fff;
  padding: 10px 20px 10px 20px;
  border-radius: 25px;
  border: 0;
  margin-top: 3rem;
  &:hover {
    font-size: 1.2rem;
  }
`;

export const T1 = styled.h1`
  font-size: 2rem;
  margin: 1px;
`;
export const T2 = styled.h1`
  font-size: 1rem;
  margin: 1px;
`;
