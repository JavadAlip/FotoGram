import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginVid from '../assets/share.mp4';
import logo from '../assets/fotogram.png';
import { GoogleLogin } from 'react-google-login';
import { client } from '../client';

const clientId = "973735556425-cdaf3sfi07al7t9ld3ijdgs2st95eu1i.apps.googleusercontent.com"
const Login = () => {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    // console.log('LOGIN SUCCESS! Current user:', res.profileObj)
    localStorage.setItem('user', JSON.stringify(res.profileObj))

    const { name, googleId, imageUrl } = res.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    }
    client.createIfNotExists(doc)
      .then(() => {
        navigate('/', { replace: true })
      })
  }
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res:", res)
  }
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={loginVid}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay'>
          <h1 className='text-white poppins-font' style={{ fontSize: '1.5em' }}>
            Welcome to
          </h1>
          <div style={{ filter: 'brightness(0) invert(1) grayscale(1)' }}>
            <img src={logo} alt='' />
          </div>
          <div className='mt-2 flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none' id='signInButton'>
            <GoogleLogin
              clientId={clientId}
              buttonText='Login'
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy='single_host_origin'
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
