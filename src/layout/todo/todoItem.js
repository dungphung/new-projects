import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
`;

export default function TodoItems({ items }) {
  if (!items || (items && !items.length)) return <p>Chưa có nhiệm vụ nào cả!!!</p>;
  return (
    <UL>
      {items.map(item => {
        return <li key={item.id}>+ {item.title}</li>;
      })}
    </UL>
  );
}
