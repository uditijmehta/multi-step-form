import React from 'react';
import { useState } from 'react';
import UserInfo from '../components/UserInfo';
import Survey from '../components/Survey';
import Confirmation from '../components/Confirmation';
import { useMachine } from '@xstate/react';
import formMachine from '../machine';
import Head from 'next/head';

export default function Home() {
  const [current, send] = useMachine(formMachine);
  const [formData, setFormData] = useState({});

  const setUserInfo = (data) => {
    setFormData(prevData => ({ ...prevData, ...data }));
    send('NEXT');
  };

  const setSurvey = (data) => {
    setFormData(prevData => ({ ...prevData, ...data }));
    send('NEXT');
  };

  const goBack = () => {
    send('BACK');
  };

  const confirm = () => {
    // here you can send formData to a server
    console.log(formData);
    send('SUBMIT');
  };

  return (
    <>
      <Head>
        <title>My Multi-Step Form</title>
        <meta name="description" content="A multi-step form built with Next.js and XState." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        {current.matches('userInfo') && <UserInfo data={formData} onSubmit={setUserInfo} />}
        {current.matches('survey') && <Survey data={formData} onBack={goBack} onSubmit={setSurvey} />}
        {current.matches('confirmation') && <Confirmation data={formData} onBack={() => send('BACK')} onSubmit={confirm} />}
        {current.matches('submitted') && <p className="acknowledgement">Form submitted successfully!</p>}
      </main>
    </>
  )
}
