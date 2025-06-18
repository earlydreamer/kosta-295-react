import React from "react";

const Ex03_form2 = () => {
  const [profile, setProfile] = React.useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPhone: "",
  });

  const inputUpdate = (e) => {
    // const { name, value } = e.target;
    // console.log(e.target);
    const {name, value, target} = e.target;
    console.log(name,value,target);
    
    setProfile({ 
        ...profile, 
        [name]: value //name은 문자열이다
        // [e.target.name]: e.target.value //이렇게도 가능 
    });
    //console.log(`이름: ${profile.userName}, 나이: ${profile.userAge}, 이메일: ${profile.userEmail}, 전화번호: ${profile.userPhone}`);
  };

  return (
    <div>
      <h1>
        이름 :{" "}
        <input
          type="text"
          value={profile.userName}
          name="userName"
          onChange={inputUpdate}
        />
        <br />
        나이 :{" "}
        <input
          type="text"
          value={profile.userAge}
          name="userAge"
          onChange={inputUpdate}
        />
        <br />
        이메일 :{" "}
        <input
          type="email"
          value={profile.userEmail}
          name="userEmail"
          onChange={inputUpdate}
        />
        <br />
        전화번호 :{" "}
        <input
          type="tel"
          value={profile.userPhone}
          name="userPhone"
          onChange={inputUpdate}
        />
        <br />
      </h1>
    </div>
  );
};

export default Ex03_form2;
