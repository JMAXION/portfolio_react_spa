import React from "react";
/**
 *
 */
export function TestimonialForm({ testimonial }) {
  const t = testimonial && testimonial.length !== 0 ? testimonial : {};
  return (
    <>
      <TestimonialAvatar image={t.image} meta={t.meta} />
      <TestimonialBubble bubble={t.bubble} name={t.name} company={t.company} />
    </>
  );
}

/**
 *TestimonialAvatar
 */
export function TestimonialAvatar({ image, meta }) {
  return <img className="testimonial__img" src={image} alt={meta} />;
}

/**
 *TestimonialBubble
 */
export function TestimonialBubble({ bubble, name, company }) {
  return (
    <div className="testimonial__bubble">
      <p>{bubble}</p>
      <p>
        <a href="#" className="testimonial__bubble__name">
          {name}
        </a>{" "}
        / {company}
      </p>
    </div>
  );
}
