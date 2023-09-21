const Tour = ({title,info,location,cost,duration,date,image}) => {
  return (
    <div>
      <article className="tour-card">
          <div className="tour-img-container">
            <img src={image}className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
              
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{date}</p>
              <p>from ${cost}</p>
            </div>
          </div>
        </article>
    </div>
  )
}

export default Tour
