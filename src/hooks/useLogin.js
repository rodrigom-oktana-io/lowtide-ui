import { useRef, useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import { SessionContext } from '../context/SessionContext';

const API_URL = 'https://lowtide.herokuapp.com/api';

const useLogin = () => {
  // axios.defaults.withCredentials = true;
  const { setIsLoggedIn } = useContext(SessionContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing.

    // Since preventDefault stops form validation, we need to programatically run it
    if (!formRef.current.checkValidity())
      return formRef.current.reportValidity();

    try {
      // const response = await axios.get('https://lowtide.herokuapp.com/');
      // console.log(response);
      const response = await axios.post(`${API_URL}/auth`, {
        source: 'credentials',
        credentials: {
          username: email,
          password: password,
        },
      });

      if (response.status === 200) {
        console.log({ response });
        console.log('cookie', Cookies.get());
        return setIsLoggedIn(true);
      }
    } catch (error) {
      console.log({ error });
      alert(error);
    }
  };

  return { email, password, formRef, setEmail, setPassword, handleSubmit };
};

export default useLogin;
