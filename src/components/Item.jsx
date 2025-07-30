import location from "../assets/Fill 219.svg";
import "../layouts/Item.css";

function Item({ img, title, country, googleMapsLink, dates, text }) {
  return (
    <div>
      <article>
        <div className="img">
          <img src={img.src} alt={img.alt} />
        </div>
        <div className="all">
          <div className="location">
            <img src={location} alt="location" />
            <span>{country}</span>
            <a href={googleMapsLink}>View in google maps</a>
          </div>
          <h3>{title}</h3>
          <time>{dates}</time>
          <p>{text}</p>
        </div>
      </article>
    </div>
  );
}

export default Item;
