import react from "react";

const Category = ({ filter }) => {
  return (
    <div className="buttons">
      <button type="button" className="cont" onClick={() => filter("01")}>
        Januar
      </button>
      <button type="button" className="cont" onClick={() => filter("02")}>
        Februar
      </button>
      <button type="button" className="cont" onClick={() => filter("03")}>
        Mart
      </button>
    </div>
  );
};

export default Category;
