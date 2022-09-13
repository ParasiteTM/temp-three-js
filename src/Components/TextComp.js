import { TextContainer, SeletorButton } from './Styled/index.js';
import { useContext, useEffect } from 'react';
const TextComp = ({
  setBody,
  ShibaRef1,
  ShibaRef2,
  ShibaRef3,
  setCurrentFocus,
}) => {
  // const { ShibaRef1, ShibaRef2, ShibaRef3 } = useContext(ctx);

  return (
    <TextContainer>
      <h1>Controller</h1>
      <div
        style={{
          display: 'flex',
          gap: '5px',
        }}
      >
        <SeletorButton onClick={() => setCurrentFocus(ShibaRef1)}>
          1
        </SeletorButton>
        <SeletorButton onClick={() => setCurrentFocus(ShibaRef2)}>
          2
        </SeletorButton>
        <SeletorButton onClick={() => setCurrentFocus(ShibaRef3)}>
          3
        </SeletorButton>
        {/* <SeletorButton>Nose</SeletorButton>
        <SeletorButton>Nose</SeletorButton> */}
      </div>
    </TextContainer>
  );
};

export default TextComp;
