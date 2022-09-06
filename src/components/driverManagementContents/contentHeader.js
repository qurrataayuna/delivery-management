import { header } from "./styles";

const ContentHeader = () => {
  return (
    <div css={header}>
      <div>
        <h3>DRIVER MANAGEMENT</h3>
        <span>Data driver yang bekerja dengan Anda</span>
      </div>

      <div>
        <button>TAMBAH DRIVER</button>
      </div>
    </div>
  );
};

export default ContentHeader;
