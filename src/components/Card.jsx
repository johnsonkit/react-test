const Card = ({
  school: { Facility_Name, Address, Last_Updated_Date___最後更新日期, Dataset },
}) => {
  return (
    <div className="card--item">
      <div className="card--item__title">{Facility_Name}</div>
      <div className="more">
        <div className="card--item__address">
          <div className="card--item__address__icon">
            <i className="icon icon-map"></i>
          </div>
          <div className="card--item__address__text">{Address}</div>
        </div>
        <div className="card--item__date">
          <div className="card--item__date_icon">
            <i className="icon icon-tick"></i>
          </div>
          <div className="card--item__date_text">
            <div className="heading">Last Updated Date</div>
            {
              new Date(Last_Updated_Date___最後更新日期)
                .toISOString()
                .split("T")[0]
            }
          </div>
        </div>
        <div className="card--item__dataset">
          <div className="card--item__dataset__icon">
            <i className="icon icon-dot"></i>
          </div>
          <div className="card--item__dataset__text">{Dataset}</div>
        </div>
      </div>
      <a href="/" className="bookmark">
        <i className="icon icon-bookmark"></i>
      </a>
    </div>
  );
};

export default Card;
