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
            { value: 5 },
            { value: 10, label: "10" },
            { value: 15 },
            { value: 20, label: "20" },
          ]}
          color={"secondary"}
          min={0}
          max={20}
          step={0.5}
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
