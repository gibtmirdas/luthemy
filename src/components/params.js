import { Slider } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";
import SpeedContext from "../contexts/speedContext";

const Container = styled.h3`
  margin-top: 6em;
`;

const SliderStyled = styled.div``;

function Params() {
  const { speed, setSpeed } = useContext(SpeedContext);
  return (
    <Container>
      <SliderStyled>
        <Slider
          marks={[
            { value: 0, label: "0" },
            { value: 1, label: "1" },
            { value: 2, label: "2" },
            { value: 3, label: "3" },
          ]}
          color={"secondary"}
          min={0}
          max={3}
          step={0.1}
          valueLabelDisplay={"auto"}
          value={speed}
          onChange={(_, value) => {
            setSpeed(value);
          }}
        />
      </SliderStyled>
    </Container>
  );
}

export default Params;
