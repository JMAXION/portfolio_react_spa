/**
 *
 */
export function HomeTitle({ title, name, desc }) {
  return (
    <div>
      <h2 className="home__title">
        Hello <br />
        I'm <strong className="home__title--strong">{title}</strong>, {name}
      </h2>
      <p className="home__description">{desc}</p>
    </div>
  );
}

/**
 *Profile Avatar
 */
export function Avatar({ src }) {
  return <img className="home__avatar" src={src} alt="portfolio" />;
}
