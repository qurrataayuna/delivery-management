import { cx } from "@emotion/css";
import { useDispatch, useSelector } from "react-redux";
import { setPaginations } from "../../redux/drivers/actions";
import { selectPage, selectTotalPage } from "../../redux/drivers/selectors";
import { pagination } from "./styles";

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPage = useSelector(selectTotalPage);
  const isFirstPage = page === 1;
  const isLastPage = page === totalPage;

  const handlePage = (newPage) => {
    if (newPage === 0 || newPage === totalPage + 1) {
      return null;
    }

    dispatch(
      setPaginations({
        page: newPage,
        totalPage,
        startIdx: 5 * (newPage - 1),
      })
    );
  };

  return (
    <div css={pagination}>
      <div
        onClick={() => handlePage(page - 1)}
        className={cx({ disabled: isFirstPage })}
      >
        <img
          src={isFirstPage ? "./arrow-grey.png" : "./arrow-black.png"}
          alt="left"
        />
        <p>Previous Page</p>
      </div>

      <div
        onClick={() => handlePage(page + 1)}
        className={cx({ disabled: isLastPage })}
      >
        <p>Next Page</p>
        <img
          className="right-arrow"
          src={isLastPage ? "./arrow-grey.png" : "./arrow-black.png"}
          alt="right"
        />
      </div>
    </div>
  );
};

export default Pagination;
