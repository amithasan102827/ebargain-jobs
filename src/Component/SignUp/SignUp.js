import React from 'react';
import './SignUP.css'
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';
import {  TextField } from '@mui/material';
import { useState } from 'react';

const SignUp = () => {

    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    
    return (
        <div className=' main-container   container h-auto'>
            <div className=''>
                <h1 className='text-success mt-5 mb-5 create-account-text '>Create Account</h1>
            </div>
            <div className='mb-5'>
                <button type="button" class="btn btn-outline-danger me-4 singUp-button"><FcGoogle style={{ fontSize: '25px', marginRight: '10px' }} />Sign up with Google</button>
                <button type="button" class="btn btn-outline-primary ms-4 singUp-button"><FaFacebookSquare style={{ fontSize: '25px', marginRight: '10px' }} />Sign up with Facebook</button>
            </div>
            <div className='mb-5 lh-lg ms-2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField sx={{width:'45%'}} {...register("name", { required: true })} id="standard-basic" label="Full Name" variant="standard" /> <br />
                    <p className='text-danger '> {errors.name?.type === 'required' && "First name is required"}</p> <br />
            
                    <TextField sx={{width:'45%'}} {...register("email", { required: true })} id="standard-basic" label="Email Address" variant="standard" /> <br />
                    {errors.email?.type === 'required' && "First name is required"} <br />
                    
                    
                    <div className='position-relative'>
                    {/* <i onClick={()=>console.log('show password')}><BsFillEyeFill  style={{position:'absolute',top:'25px',right:'370px',cursor:'pointer'}}/></i> */}
                    <TextField  sx={{width:'45%',}} type="password" {...register("password", { required: true })} id="standard-basic" label="password" variant="standard" />  <br />
                    {errors.password?.type === 'required' && "First name is required"} <br />
                    </div>
                    
                    {/* <div className='position-relative'>
                    <i onClick={()=>console.log('show password')}><BsFillEyeFill  style={{position:'absolute',top:'13px',right:'370px',cursor:'pointer'}}/></i>
                        <input style={{ width: '45%', borderTop: 'none', borderLeft: 'none', borderRight:'none',outline:'none'}} type="password" {...register("password", { required: true })} id="standard-basic" label="password" variant="standard" />  <br />
                    {errors.password?.type === 'required' && "First name is required"} <br />
                      </div> */}
            




                    <button className='py-1 mt-3' style={{ width: '45%', background: '#5EA373', color: 'white', border: 'none', fontWeight: 'bold' }} type="submit" >Create Account</button>
                    
                </form>


            </div>
           

        </div>
    );
};

export default SignUp;