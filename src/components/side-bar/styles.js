import { css } from "@emotion/react";

export const wrapper = css`
  margin: 16px 0;
  padding: 0px;
`;

export const menuItem = css`
  padding: 0px 16px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 14px;

  img {
    width: 20px;
  }

  &.active {
    color: #ed4a41;
    font-weight: bold;
    border-left: 4px solid #ed4a41;
  }
`;
