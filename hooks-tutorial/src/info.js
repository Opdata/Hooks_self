import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });

  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>이름 : {name}</div>
        <div>닉네임 : {nickname}</div>
      </div>
    </div>
  );
};

export default Info;

// import React, { useState, useEffect } from "react";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");
//   /*
//   useEffect(() => {
//     console.log('마운트될 때만 실행된다.)
//   }, []);
//   */

//   /*
//   useEffect(() => {
//     console.log('name 상태가 변경될때만 실행된다.)
//   }, [name]);
//   */

//   /*
//   useEffect(() => {
//     console.log("렌더링 완료");
//     console.log({ name, nickname });
//   });
//   */

//   useEffect(() => {
//     console.log("effect");
//     console.log(name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   });
//   const onChangeName = e => {
//     setName(e.target.value);
//   };

//   const onChangenickName = e => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangenickName} />
//       </div>
//       <div>
//         <div>
//           <b>이름 : {name}</b>
//         </div>
//         <div>
//           <b>닉네임 : {nickname}</b>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;
