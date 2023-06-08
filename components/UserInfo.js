import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import styles from './UserInfo.module.css';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
});

function UserInfo({ onSubmit, data }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema),
    defaultValues: data });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image className={styles.logo} src="/images/logo.png" alt="SXD Project Logo" width={50} height={50} />
        <h1 className={styles.title}>SXD Project</h1>
        
      </header>
      <h2 className={styles.sec_title}>Enter your Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>
          Name: 
          <input className={styles.whiteText} {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          Email: 
          <input className={styles.whiteText} {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default UserInfo;
