import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Major
 */
export function Major({ icon, title, desc }) {
  return (
    <div>
      <FontAwesomeIcon className="major__icon" icon={icon} />
      <p className="major__title">{title}</p>
      <p className="major__description">{desc}</p>
    </div>
  );
}

export function Job({ img, alt, name, period }) {
  return (
    <div className="job">
      <img src={img} alt={alt} />
      <div>
        <p className="job__name">{name}</p>
        <p className="job__period">{period}</p>
      </div>
    </div>
  );
}
