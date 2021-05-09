import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './shipment.css'
const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ship-form"> 
      <input {...register("name", { required: true })} placeholder="Your Name" defaultValue={loggedInUser.name}/>
      {errors.name && <span className="error">This field is required</span>}
      <input {...register("email", { required: true })} placeholder="Your Email" defaultValue={loggedInUser.email}/>
      {errors.email && <span className="error">This field is required</span>}
      <input {...register("address", { required: true })} placeholder="Your Address"/>
      {errors.address && <span className="error">This field is required</span>}
      <input {...register("phone", { required: true })} placeholder="Your Phone Number"/>
      {errors.phone && <span className="error">This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default Shipment;