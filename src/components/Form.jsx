import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

function Form() {
    const myschema = z.object({
        user: z.string().min(5, "must enter more than 5 char"),
        email: z.string().email("Invalid email address"),
        password: z.string().max(10, "must be less than 20 char"),
        city: z.string().min(1, "Please select a city"),
    });
    const { register, handleSubmit, formState } = useForm(
        {
            resolver: zodResolver(myschema),
        }
    )

    function save(values) {
        console.log(formState.errors);
        console.log(values)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register("user")} placeholder="Username" style={{border:formState.errors?.user?"10px solid red":""}} />
                <br />
                <small style={{ display: formState.errors?.user ? "block" : "none", color: "red" }}>
                    {formState.errors?.user?.message}
                </small>
                <br />
                <input type="email" {...register("email")} placeholder="Email" style={{border:formState.errors?.email?"10px solid red":""}} />
                <br />
                <small style={{ display: formState.errors?.email ? "block" : "none", color: "red" }}>
                    {formState.errors?.email?.message}
                </small>
                <br />
                <input type="password" {...register("password")} placeholder="Password" style={{border:formState.errors?.password?"10px solid red":""}}/>
                <br />

               <small style={{ display: formState.errors?.password ? "block" : "none", color: "red" }}>
                    {formState.errors?.password?.message}
                </small>

                <br />
                <select {...register("city")} defaultValue="" style={{border:formState.errors?.city?"10px solid red":""}}>
                    <option value="" >Select City</option>
                    <option value="cairo">cairo</option>
                    <option value="alex">Alex</option>
                    <option value="giza">Giza</option>
                    <option value="aswan">Aswan</option>
                </select>
                <br />
                <small style={{ display: formState.errors?.city ? "block" : "none", color: "red" }}>
                    {formState.errors?.city?.message}
                </small>
                <br />

                <button>save</button>
            </form>
        </div>
    )
}

export default Form
