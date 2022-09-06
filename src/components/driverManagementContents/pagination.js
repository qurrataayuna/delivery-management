import { useDispatch, useSelector } from "react-redux";
import { setPaginations } from "../../redux/drivers/actions";
import { selectPage, selectTotalPage } from "../../redux/drivers/selectors";
import { pagination } from "./styles";

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPage = useSelector(selectTotalPage);

  const handlePage = (newPage) => {
    console.log("start at", 5 * (page - 1));
    dispatch(
      setPaginations({
        page: newPage,
        totalPage,
        startIdx: 5 * (page - 1),
      })
    );
  };

  return (
    <div css={pagination}>
      <div onClick={() => handlePage(page - 1)}>
        <img src="./arrow-grey.png" alt="left" />
        <p>Previous Page</p>
      </div>

      <div onClick={() => handlePage(page + 1)}>
        <p>Next Page</p>
        <img className="right-arrow" src="./arrow-black.png" alt="right" />
      </div>
    </div>
  );
};

export default Pagination;
