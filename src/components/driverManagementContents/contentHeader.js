import { useDispatch } from "react-redux";
import {
  setDisplayData,
  setPaginations,
  setSearchQuery,
} from "../../redux/drivers/actions";
import { header } from "./styles";

const ContentHeader = () => {
  const dispatch = useDispatch();

  const handleSearchQuery = (e) => {
    if (e.key === "Enter") {
      const data = JSON.parse(sessionStorage.getItem("drivers"));
      const dataFiltered = data.filter((item) =>
        item.name.first.toLowerCase().includes(e.target.value.toLowerCase())
      );

      dispatch(setSearchQuery(e.target.value));
      dispatch(
        setPaginations({
          page: 1,
          totalPage:
            dataFiltered.length % 5 === 0
              ? dataFiltered.length / 5
              : Math.floor(dataFiltered.length / 5) + 1,
          startIdx: 0,
        })
      );
      dispatch(
        setDisplayData({
          payload: dataFiltered.slice(0, 5),
        })
      );
    }
  };
  return (
    <div css={header}>
      <div>
        <h3>DRIVER MANAGEMENT</h3>
        <span>Data driver yang bekerja dengan Anda</span>
      </div>

      <div>
        <input
          type="text"
          placeholder="Cari driver (enter untuk mencari)"
          onKeyDown={(e) => handleSearchQuery(e)}
        />
        <button>TAMBAH DRIVER</button>
      </div>
    </div>
  );
};

export default ContentHeader;
