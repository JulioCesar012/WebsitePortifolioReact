import AnchorLink from "react-anchor-link-smooth-scroll";

const NameTop = () => {
  return (
    <div>
      <div class="navbar transform" id="navbar"></div>
      <div class="name-top transform">
        <AnchorLink href="#home">
          <span class="light-orange">&lt;</span>Julio Filho
          <span class="light-orange">/&gt;</span>
        </AnchorLink>
      </div>
    </div>
  );
};

export default NameTop;
