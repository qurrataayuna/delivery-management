import { itemWrapper, listWrapper, dataItem } from "./styles";
import moment from "moment";

const DriverList = ({ data }) => {
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
      {data.map((item) => {
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
