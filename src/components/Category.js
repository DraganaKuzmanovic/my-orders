import react from "react";

const Category = ({ filter }) => {
  let newDate = new Date();
  let todaysDate = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
    console.log(parseInt(month));
  }
  return (
    <div className="buttons">
      <button type="button" className="cont" onClick={() => filter("00")}>
        Svi
      </button>
      {month === "01" ||
      parseInt(month) + 1 === 13 ||
      parseInt(month) - 1 === 1 ? (
        <button type="button" className="cont" onClick={() => filter("01")}>
          Januar
        </button>
      ) : null}
      {month === "02" ||
      parseInt(month) + 1 === 2 ||
      parseInt(month) - 1 === 2 ? (
        <button type="button" className="cont" onClick={() => filter("01")}>
          Februar
        </button>
      ) : null}
      {month === "03" ||
      parseInt(month) + 1 === 3 ||
      parseInt(month) - 1 === 3 ? (
        <button type="button" className="cont" onClick={() => filter("01")}>
          Mart
        </button>
      ) : null}
      {month === "04" ||
      parseInt(month) + 1 === 4 ||
      parseInt(month) - 1 === 4 ? (
        <button type="button" className="cont" onClick={() => filter("01")}>
          April
        </button>
      ) : null}
    </div>
  );
};

export default Category;
