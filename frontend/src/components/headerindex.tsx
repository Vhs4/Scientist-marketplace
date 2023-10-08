'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import LoginModal from './loginmodal';
import SignUpModal from './signupmodal';

export default function HeaderIndex() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  return (
    <div className="navbar bg-primary-bg">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl logo-principal-svg">
          <Image
            src="assets/logosvgsemfundo.svg"
            alt="Logo"
            width={50}
            height={50}
          />
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-info mr-2 btn-12px" onClick={toggleLoginModal}>
          Log in
        </button>
        <button className="btn btn-info btn-12px" onClick={toggleSignUpModal}>Sign Up</button>
      </div>
      {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} />}
      {isSignUpModalOpen && <SignUpModal onClose={toggleSignUpModal} />}
    </div>
  );
}
