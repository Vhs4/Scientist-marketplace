'use client'

import SkillDescription from '../components/skills'
import SmoothScrollLink from './smoothScroll'
import SignUpModal from './signupmodal';
import React, { useState } from 'react';

export default function sectionLogout() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };
  return (
    
    <div>
      <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://media.discordapp.net/attachments/1160180549114142752/1160269345830748182/pexels-pavel-danilyuk-8442282-scaled.png?ex=65340c08&is=65219708&hm=5b5ce9061a3e5770789df78d682c58f3087bf2a4c7546ece4fbc18069fc01889&=&width=312&height=467" className="w-6/12	rounded-lg shadow-2xl mr-4" />
          <div>
            <h1 className="text-5xl font-bold">Meet one of the best communities of scientists</h1>
            <p className="py-6">Meet people interested in science and contribute your ideas!</p>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header font-bold">
    User 1
  </div>
  <div className="chat-bubble">I have an idea, you can help me?</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header font-bold">
    User 2
  </div>
  <div className="chat-bubble">Yes! What you need?</div>
</div>
            <SmoothScrollLink to="#dinamyc" className="btn btn-info btn-outline">
              Join the community
            </SmoothScrollLink>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen" id="dinamyc" style={{ backgroundImage: 'url(https://cdn.discordapp.com/attachments/1160180549114142752/1160373178758070272/photo-1496065187959-7f07b8353c55.png?ex=65346cbc&is=6521f7bc&hm=a55849689e21355d9e783814881fdb2bba885ea54ec0ad725ca5915a70f5a9eb&)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content mr-96">
          <div className="max-w-md text-left items-start mr-96">
            <h1 className="mb-5 text-5xl font-bold">Dynamic community</h1>
            <p className="mb-5">We have a system of features and identification based on your skills.</p>
            <SkillDescription skill="Data analysis" senioridade="Junior" corTexto="text-cyan-700" corBarra="bg-teal-300" corBarrinha="bg-teal-300" />
            <SkillDescription skill="Scientific Observation" senioridade="Pleno" corTexto="text-teal-800" corBarra="bg-green-400" corBarrinha="bg-green-400" />
            <SkillDescription skill="Laboratory Methods" senioridade="Sênior" corTexto="text-black" corBarra="bg-yellow-400" corBarrinha="bg-yellow-400" />
            <button className="btn btn-info text-white" onClick={toggleSignUpModal}>Get Started</button>
          </div>
        </div>
      </div>
     
      <div className="collapse collapse-plus bg-gray-200 mt-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Why do people choose us?
        </div>
        <div className="collapse-content">
          <p className='font-semibold'>Because we are the only networking platform capable of bringing you closer to what you need with convenience! Thus, providing dynamic experiences.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-200 mt-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I find projects to contribute to?
        </div>
        <div className="collapse-content">
          <p className='font-semibold'>Yes!</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-200 mt-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I post my projects to receive contributions?
        </div>
        <div className="collapse-content">
          <p className='font-semibold'>Certainly!
          </p>
        </div>
        
      {isSignUpModalOpen && <SignUpModal onClose={toggleSignUpModal} />}
      </div>
    </div>

  )
}