import React ,{useState} from 'react'
import './AddUser.css'
import {useForm} from 'react-hook-form'
 import axios from "axios"  
 import {useNavigate} from "react-router-dom"



function AddUser(){
    let navigate=useNavigate();
    let{
        register,handleSubmit,
        formState:{errors},
    }=useForm();
    //HTTP req error state
    let [err,setErr]=useState("")


    let addNewUser=(newUser)=>{
    
       // console.log(newUser);
        /*save new user to json-server using http post req */
        axios.post(" http://localhost:4000/users",newUser)
        .then(responce=>{
            if(responce.status===201){
                setErr("")
                //navigate to user component
                navigate("/users")

            }
        })
        .catch(err=>{console.log("err is ",err)
            //thwe client was given an error responce(4xx,5xx)
            if(err.responce){
                setErr(err.message)

            }
            //the client received a responce and the req was never left
            else if(err.request){
                setErr(err.message)

            }
            //other errors
            else{
                setErr(err.message)

            }
        })

    };
    return (
        <div className="add-user">
            <p className="display-3 text-center">Add New User</p>
            {/*http err msg */}
            {err.length!==0 && <p className="display-3 fw-bold text-center text-danger">{err}</p>}
        <div className="row">
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <form onSubmit={handleSubmit(addNewUser)}>
            {/*name */}
            <div className="mb-3">
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" 
                className="form-control" 
                {...register("name",{required:true})} />
                {/*validation errors for name */}
                {errors.name?.type=="required" && <p className="text-danger fw-bold fs-5">*Name is required</p>}
            </div>
            {/*email */}
              <div className="mb-3">
                <label htmlFor='name'>Email</label>
                <input type="emailtext" id="email" 
                className="form-control" 
                {...register("email",{required:true})} />
                 {/*validation errors for email */}
                {errors.email?.type=="required" && <p className="text-danger fw-bold fs-5">*Email is required</p>}
            </div>
            {/*dob */}
              <div className="mb-3">
                <label htmlFor='name'>Date Of Birth</label>
                <input type="date" id="dob" 
                className="form-control" 
                {...register("dob",{required:true})} />
                 {/*validation errors for DOB */}
                {errors.dob?.type=="required" && <p className="text-danger fw-bold fs-5">*DOB is required</p>}
            </div>
            {/*image */}
              <div className="mb-3">
                <label htmlFor='name'>Upload image</label>
                <input type="text" id="image" 
                className="form-control" 
                {...register("image",{required:true})} />
                 {/*validation errors for image */}
                {errors.image?.type=="required" && <p className="text-danger fw-bold fs-5">*Image is required</p>}
            </div>
            {/*submit button */}
            <button  type="submit" className="btn add-user-btn">Create New User</button>
         
            </form>


        </div>
        </div>
        </div>
    )
}



export default AddUser