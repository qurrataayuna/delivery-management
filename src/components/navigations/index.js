import { wrapper, logo, identity } from "./styles";

const Navigations = () => {
  return (
    <div css={wrapper}>
      <div css={logo}>
        <img src="/logogram.png" alt="Logo" />
        <em>Shipper</em>
      </div>

      <div css={identity}>
        <span>Hello,</span>
        <span className="username">Shipper User</span>

        <img src="/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Navigations;
