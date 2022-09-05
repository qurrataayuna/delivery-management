import { css } from "@emotion/react";

export const wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

export const logo = css`
  margin: 30px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: #ed4a41;

  img {
    height: 30px;
    width: auto;
    padding-right: 4px;
  }
`;

export const identity = css`
  margin: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 2px;

  .username {
    color: #ed4a41;
  }

  img {
    width: 30px;
    padding-left: 4px;
  }
`;
