import styled from "styled-components";
import PropTypes from "prop-types";
import Accent from "./accent";

const NoteContainer = styled.div`
  margin-left: 1.4em;
`;

const NoteStyled = styled.div`
  font-size: 1.8em;
  font-style: italic;
  line-height: 1em;
  margin-top: 0.6em;
  margin-right: 0.2em;
  width: 1em;
`;

const NoteStyledTop = styled(NoteStyled)`
  line-height: 1em;
  margin-top: -0.33em;
  margin-bottom: 0.93em;
`;

const NoteContent = styled.div`
  position: relative;
`;

const NoteData = styled.div`
  position: absolute;
`;

const AccentsContainer = styled.div`
  position: relative;
  bottom: 0.28em;
  right: 0.18em;
`;

const AccentShell = styled.div`
  position: relative;
`;
const AccentContent = styled.div`
  position: absolute;
  left: -0.15em;
  bottom: 0.08em;
  color: red;
`;

const getAccent = (remainginIndex, content) => {
  if (remainginIndex === 1) return <Accent />;
  return (
    <>
      <Accent />
      <AccentShell>
        <AccentContent>{getAccent(remainginIndex - 1, content)}</AccentContent>
      </AccentShell>
    </>
  );
};

const buildContent = (props) => {
  let accents = null;
  if (props.nbAccents > 0) {
    accents = getAccent(props.nbAccents);
  }
  return (
    <NoteContent>
      <NoteData>{props.value}</NoteData>
      <AccentsContainer>{accents}</AccentsContainer>
    </NoteContent>
  );
};

const Note = (props) => (
  <NoteContainer>
    {props.isTop ? (
      <NoteStyledTop>{buildContent(props)}</NoteStyledTop>
    ) : (
      <NoteStyled>{buildContent(props)}</NoteStyled>
    )}
  </NoteContainer>
);
Note.defaultProps = {
  value: PropTypes.string.isRequired,
  nbAccents: PropTypes.number.isRequired,
  isTop: PropTypes.bool.isRequired,
};
Note.defaultProps = {
  value: "a",
  nbAccents: 0,
  isTop: false,
};

export default Note;
