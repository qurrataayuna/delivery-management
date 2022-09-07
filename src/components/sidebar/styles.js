import { css } from "@emotion/react";

export const wrapper = css`
  width: 25%;
  height: 100%;
  padding: 16px 0;
  background: #fff;

  @media only screen and (max-width: 800px) {
    display: none;
  }
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
