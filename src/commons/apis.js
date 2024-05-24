/* 
fetchData
 */

// export function fetchData(){} 이렇게 만들 수도 있다
// export function async arguments() 이렇게 async 만든다.(비동기식 순서 중요할 때)
export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("!!!!!ERROR!!!!!");
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("newtork error", error);
  }
};
