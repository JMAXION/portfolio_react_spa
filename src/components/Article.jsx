import React from "react";

export default function Article({ className, title, list }) {
  //!!props로 넘어오는 객체는 반드시 존재여부를 체크해야 한다.
  // const flist = list && list.length !== 0 ? list : [];
  const flist = list && list;

  return (
    <div class={className}>
      <h3 class="skill__title">{title}</h3>
      <ul>
        {flist.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}
