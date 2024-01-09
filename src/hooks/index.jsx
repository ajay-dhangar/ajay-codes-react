import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HooksContainer = styled.div`
  padding: 20px;
`;

const HooksCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const HooksCard = styled(Link)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

const HookTitle = styled.h2`
  color: #333;
`;

const Hooks = () => {
  const hooksList = [
    {
      id: 1,
      title: "useState",
    },
    {
      id: 2,
      title: "useEffect",
    },
    {
      id: 3,
      title: "useContext",
    },
    {
      id: 4,
      title: "useReducer",
    },
    {
      id: 5,
      title: "useCallback",
    },
    {
      id: 6,
      title: "useMemo",
    },
    {
      id: 7,
      title: "useRef",
    },
    {
      id: 8,
      title: "useImperativeHandle",
    },
    {
      id: 9,
      title: "useLayoutEffect",
    },
    {
      id: 10,
      title: "useDebugValue",
    },
  ];

  return (
    <HooksContainer>
      <h1>React Hooks</h1>
      <HooksCardContainer>
        {hooksList.map((hook) => (
          <HooksCard key={hook.id}>
            <HookTitle>{hook.title}</HookTitle>
          </HooksCard>
        ))}
      </HooksCardContainer>
      <useRefArticle />
    </HooksContainer>
  );
};

export default Hooks;
