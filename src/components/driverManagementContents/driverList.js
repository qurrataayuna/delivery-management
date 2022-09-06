import { itemWrapper, listWrapper, dataItem } from "./styles";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayData, setPaginations } from "../../redux/drivers/actions";
import {
  selectDisplayedData,
  selectStartIndex,
} from "../../redux/drivers/selectors";

const DriverList = ({ data }) => {
  const dispatch = useDispatch();
  const startIndex = useSelector(selectStartIndex);
  const displayedData = useSelector(selectDisplayedData);

  const testSearch = data?.filter((item) => item.name.first.includes("Brato"));

  console.log(testSearch);

  useEffect(() => {
    if (data) {
      dispatch(
        setPaginations({
          page: 1,
          totalPage:
            data.length % 5 === 0
              ? data.length / 5
              : Math.abs(data.length / 5) + 1,
          startIdx: 0,
        })
      );
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(
        setDisplayData({ payload: data.slice(startIndex, startIndex + 5) })
      );
    }
  }, [data, dispatch, startIndex]);

  const renderDataItem = (label, value) => {
    return (
      <div css={dataItem}>
        <p className="label">{label}</p>
        <p>{value}</p>
      </div>
    );
  };

  if (!data) {
    return null;
  }

  return (
    <div css={listWrapper}>
      {displayedData.map((item) => {
        const {
          dob: { date },
        } = item;
        const displayDob = moment(date).format("DD-MM-YYYY");

        return (
          <div key={item.email} css={itemWrapper}>
            <div className="head">
              <div>
                <span className="label">Driver ID</span>
                <span>{item.id.value}</span>
              </div>

              <img src="/more.png" alt="more-btn" />
            </div>

            <img className="user" src={item.picture.large} alt="img" />

            {renderDataItem(
              "Nama Driver",
              `${item.name.first}, ${item.name.last}`
            )}
            {renderDataItem("Telepon", item.phone)}
            {renderDataItem("Email", item.email)}
            {renderDataItem("Tanggal Lahir", displayDob)}
          </div>
        );
      })}
    </div>
  );
};

export default DriverList;
