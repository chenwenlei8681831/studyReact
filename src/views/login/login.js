
import style from './login.css';
import { useHistory } from 'react-router';
import React, { useEffect } from 'react';

function Login() {
  const history = useHistory();
  function toHome(){
    history.push('/Home');
  }
  function aa(){
    console.log(123123)
  }
  useEffect(() => {
    aa();
  }, [])
  return (
    <div className={`red pointer vh_100 ${style.title}`} onClick={()=>toHome()}>
        这里登陆页面(我是测试分支)
    </div>
  );
}

export default Login;
