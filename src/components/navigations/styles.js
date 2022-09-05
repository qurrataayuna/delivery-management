import { css } from "@emotion/react";

export const wrapper = css`
  margin: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`;

export const logo = css`
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
