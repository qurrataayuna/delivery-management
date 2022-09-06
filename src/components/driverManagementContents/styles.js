import { css } from "@emotion/react";

export const wrapper = css`
  width: 80%;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px;
  padding: 24px;
  background: #fff;
  line-height: 2px;

  h3 {
    color: #ed4a41;
  }

  span {
    font-size: 12px;
    color: #303030;
  }

  button {
    background-color: #ed4a41;
    color: #fff;
    border: 0;
    padding: 8px;
    font-weight: 400;
  }
`;

export const listWrapper = css`
  margin: 24px;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: scroll;
`;

export const itemWrapper = css`
  background: #fff;
  margin-right: 16px;
  font-size: 14px;
  padding-bottom: 10px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bcbcbc;
    color: #ed4a41;
    padding: 10px;

    .label {
      margin-right: 4px;
      color: #b5b5b5;
    }

    img {
      width: 16px;
    }
  }

  img {
    width: 100px;
    border-radius: 50%;
    padding: 20px 10px;
  }
`;

export const dataItem = css`
  width: 300px;
  line-height: 8px;
  padding: 4px 10px;

  .label {
    font-size: 10px;
    color: #808080;
  }
`;
