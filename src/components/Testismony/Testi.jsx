import testy from "./Testi.module.css";
import mat from "../../assets/mat.svg";
import dan from "../../assets/dan.svg";
import nap from "../../assets/nap.svg";

const Testi = () => {
  return (
    <div className={testy.container}>
      <h3 className={testy.head}> Testimonials</h3>
      <div className={testy.containerwrap}>
        <div className={testy.flex}>
          <p>
            Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do
            euismod tempor incididunt ut labore et dolore magna aliqua.. Ut
            eniim Lorem ipsum
          </p>
          <div className={testy.Testy}>
            <img className={testy.Testimg} src={dan} alt="" />
            <div className={testy.left}>
              <h4>Cole Stone</h4>
              <p>Product Designer</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className={testy.flex}>
          <p>
            Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do
            euismod tempor incididunt ut labore et dolore magna aliqua.. Ut
            eniim Lorem ipsum
          </p>
          <div className={testy.Testy}>
            <img className={testy.Testimg} src={mat} alt="" />
            <div className={testy.left}>
              <h4>Rachel Chu</h4>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
        <div className={testy.flex}>
          <p>
            Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do
            euismod tempor incididunt ut labore et dolore magna aliqua.. Ut
            eniim Lorem ipsum
          </p>
          <div className={testy.Testy}>
            <img className={testy.Testimg} src={nap} alt="" />
            <div className={testy.left}>
              <h4>Adebayo Omoba</h4>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
