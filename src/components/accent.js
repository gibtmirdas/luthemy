import styled from "styled-components";

import { ReactComponent as AccentSvg } from "../assets/icons/accent.svg";

const AccentFrame = styled.div`
  width: 0.7em;
  height: 0.1em;
  svg path {
    fill: black;
    height: 0.5em;
  }
`;

const Accent = () => {
  return (
    <AccentFrame>
      <AccentSvg />
    </AccentFrame>
  );
};

export default Accent;
