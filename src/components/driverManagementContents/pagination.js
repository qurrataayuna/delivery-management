import { pagination } from "./styles";

const Pagination = () => {
  return (
    <div css={pagination}>
      <div>
        <img src="./arrow-grey.png" alt="left" />
        <p>Previous Page</p>
      </div>

      <div>
        <p>Next Page</p>
        <img className="right-arrow" src="./arrow-black.png" alt="right" />
      </div>
    </div>
  );
};

export default Pagination;
