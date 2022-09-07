import { css } from "@emotion/react";

export const wrapper = css`
  width: 80%;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
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
    border-radius: 2px;
    padding: 8px;
    font-weight: 400;
  }

  input {
    padding: 7px;
    margin-right: 8px;
    border: 0.5px solid #b5b5b5;
    border-radius: 2px;
    width: 250px;
  }

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    input {
      margin-bottom: 8px;
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export const listWrapper = css`
  margin: 24px;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: scroll;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 24px;
  }
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

  .user {
    width: 100px;
    border-radius: 50%;
    padding: 20px 10px;
  }

  @media only screen and (max-width: 800px) {
    margin-bottom: 16px;
    width: 100%;
    margin-right: 0;

    .content {
      display: flex;
      align-items: flex-start;
      justify-content: start;
    }
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

  @media only screen and (max-width: 800px) {
    padding: 2px 10px;
    &.hidden {
      display: none;
    }
  }
`;

export const pagination = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 100px;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
    justify-content: start;

    &.disabled {
      color: #939393;
    }
  }

  img {
    width: 16px;

    &.right-arrow {
      transform: rotate(180deg);
    }
  }

  @media only screen and (max-width: 800px) {
    margin: 8px 50px;
  }
`;
