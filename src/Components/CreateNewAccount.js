// import React, { useEffect } from "react";
// import "../Css/CreateNewAccount.css";
// // import { NavLink } from "react-router-dom";
// import { useForm } from "react-hook-form";
// function CreateNewAccount() {
//   useEffect(() => {
//     document.title = "khWeather/Members";
//   }, []);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async(data) => {
//     console.log(data);
//     try{

//       const response = await fetch('http://localhost:4000/auth/register',{
//         method:'POST',
//         headers:{
//             "Content-Type": "application/json",
//         // "Authorization": "Bearer yourTokenHere"
//         },
//         body: JSON.stringify(data)
//       });
//       if(response.ok)
//       {
//         const result = await response.json();
//         console.log(result.message)
//       }
//       else
//       {
//         const result = await response.json();
//         console.log(result.message)
//       }
//     }catch(err){
//       console.log("error in sending data",err);
//     }
//   };

//   return (
//     <div className="createnewmain">
//       <div className="row" style={{ justifyContent: "center" }}>
//         <h3 style={{ marginTop: "30px" }}>Create New Account</h3>
//         <hr />
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <input
//             type="text"
//             placeholder="username"
//             autoComplete="true"
//             name="username"
//             {...register("username", { required: "Username is required" })}
//           />
//           <p style={{color:"red"}}>{errors.username?.message}</p>
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             {...register("email", { required: "Email are required" })}
//           />
//           <p style={{color:"red"}}>{errors.email?.message}</p>

//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             {...register("password", { required: "Password is required" })}
//           />
//           <p style={{color:"red"}}>{errors.password?.message}</p>

//           <br />
//           <button style={{ marginTop: "2rem" }} type="submit" id="submitbtn">
//             Create Account
//           </button>
//           <br />
//           <br />
//         </form>
//         {/* </div> */}
//       </div>
//       {/* </div> */}
//       {/* </div> */}
//     </div>
//   );
// }

// export default CreateNewAccount;
