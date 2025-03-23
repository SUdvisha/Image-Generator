// import React, { useContext } from 'react'
// import assets, { plans } from '../assets/assets'
// import {AppContext} from '../context/AppContext'
// import {motion} from 'framer-motion'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { useEffect } from "react";
// import axios from 'axios'
// const BuyCredit = () => {
//   const {user,backendUrl,loadCreditsData,token,setShowLogin} = useContext(AppContext)
//   const navigate=useNavigate()
//   const LoadRazorpay = () => {
//     useEffect(() => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       script.onload = () => {
//         console.log("Razorpay script loaded:", window.Razorpay);
//       };
//       document.body.appendChild(script);
  
//       return () => {
//         document.body.removeChild(script); // Cleanup when component unmounts
//       };
//     }, []);
//   }
//   const initPay = async (order) => {
//     if (typeof window.Razorpay === "undefined") {
//       console.error("Razorpay is not loaded. Check your script.");
//       toast.error("Payment gateway failed to load. Please refresh.");
//       return;
//     }
//     const options={
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount:order.amount,
//       currency:order.currency,
//       name:'Credits Payment',
//       description:'Credits Payment',
//       order_id:order.id,
//       receipt:order.receipt,
//       handler:async(response)=>{
//         try {
//           const {data} =await axios.post(backendUrl+'/api/user/verify-razor'
//             ,response,{headers:{token}})
//             if(data.sucess){
//               loadCreditsData();
//               navigate('/')
//               toast.success("credit added")

//             }
          
//         } catch (error) {
//           toast.error(error.message)
          
//         }

//       }
//     }
//     const rzp=new window.Razorpay(options);
//     rzp.open();
//   }

//   // useEffect(() => {
//   //   console.log("Razorpay Key:", import.meta.env.VITE_RAZORPAY_KEY_ID);
//   // }, []);

//   const paymentRazorpay=async(planId)=>{
//     try {
//       if(!user){
//         setShowLogin(true)
//       }
//       const data =await axios.post(backendUrl + '/api/user/pay-razor',{planId},
//         {headers:{token}})
//       if(data.sucess){
//         initPay(data.order)

//       }
      
//     } catch (error) {
//       toast.error(error.message)
      
//     }

//   }
//   return (
//     <motion.div
//     initial={{opacity:0.2,y:100}}
//     transition={{duration:1}}
//     whileInView={{opacity:1,y:0}}
//     viewport={{once:true}}
//     className='min-h-[80vh] text-center pt-14 mb-10'>
//       <button className='border border-gray-600 px-10 py-2
//       rounded-full !rounded-full mb-6'>Our Plans</button>
//       <h1 className='text-center text-3xl font-medium mb-6  sm:mb-10'>Choose the plan</h1>

//       <br></br>
//       <div className='flex flex-wrap justify-center gap-6 text-left'>
//         {plans.map((item,index)=>(
//           <div key={index}
//           className='bg-white drop-shadow-sm border rounded-lg !rounded-lg
//           py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
//             <img width={40} src={assets.logo_icon} alt="" />
//             <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
//             <p className='text-sm'>{item.desc}</p>
//             <p className='mt-6'>
//               <span className='text-3xl font-medium'>Rs{item.price}</span>/{item.credits} credits</p>
//               <button onClick={()=>paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8
//               text-sm rounded-md !rounded-md py-2.5 min-w-52'>{user ? 'Purchase':'Get Started'}</button>
//           </div>
//         ))}
//       </div>
 

//     </motion.div>
//   )
// }

// export default BuyCredit
// // import React, { useContext } from 'react';
// // import assets, { plans } from '../assets/assets';
// // import { AppContext } from '../context/AppContext';
// // import { motion } from 'framer-motion';
// // import { useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import axios from 'axios';

// // const BuyCredit = () => {
// //   const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext);
// //   const navigate = useNavigate();

// //   const initPay = async (order) => {
// //     if (typeof window.Razorpay === 'undefined') {
// //       console.error('Razorpay is not loaded. Check your script.');
// //       toast.error('Payment gateway failed to load. Please refresh.');
// //       return;
// //     }
    
// //     const options = {
// //       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
// //       amount: order.amount,
// //       currency: order.currency,
// //       name: 'Credits Payment',
// //       description: 'Credits Payment',
// //       order_id: order.id,
// //       receipt: order.receipt,
// //       handler: async (response) => {
// //         console.log(response);
// //         // Handle payment success logic
// //       }
// //     };
    
// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   const paymentRazorpay = async (planId) => {
// //     try {
// //       if (!user) {
// //         setShowLogin(true);
// //         return;
// //       }
      
// //       const response = await axios.post(
// //         `${backendUrl}/api/user/pay-razor`,
// //         { planId },
// //         { headers: { token } }
// //       );
      
// //       if (response.data.success) {
// //         initPay(response.data.order);
// //       }
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Payment failed. Try again.');
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0.2, y: 100 }}
// //       transition={{ duration: 1 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       className='min-h-[80vh] text-center pt-14 mb-10'
// //     >
// //       <button className='border border-gray-600 px-10 py-2 rounded-full mb-6'>Our Plans</button>
// //       <h1 className='text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

// //       <div className='flex flex-wrap justify-center gap-6 text-left'>
// //         {plans.map((item, index) => (
// //           <div
// //             key={index}
// //             className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'
// //           >
// //             <img width={40} src={assets.logo_icon} alt='Plan Icon' />
// //             <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
// //             <p className='text-sm'>{item.desc}</p>
// //             <p className='mt-6'>
// //               <span className='text-3xl font-medium'>Rs {item.price}</span> / {item.credits} credits
// //             </p>
// //             <button
// //               onClick={() => paymentRazorpay(item.id)}
// //               className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'
// //             >
// //               {user ? 'Purchase' : 'Get Started'}
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default BuyCredit;
import React, { useContext, useEffect } from "react";
import assets, { plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  // ✅ Load Razorpay script only once when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay script loaded successfully!");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup
    };
  }, []);

  const initPay = async (order) => {
    if (typeof window.Razorpay === "undefined") {
      console.error("Razorpay is not loaded. Check your script.");
      toast.error("Payment gateway failed to load. Please refresh.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Ensure this key is defined in .env
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl + "/api/user/verify-razor",
            response, { headers: { token } });

          if (data.sucess) {
            loadCreditsData();
            navigate("/");
            toast.success("Credit added successfully!");
          } else {
            toast.error("Payment verification failed!");
          }
        } catch (error) {
          console.error(error);
          toast.error("Error verifying payment.");
        }
      },
      prefill: {
        name: user?.name || "Guest",
        email: user?.email || "guest@example.com",
        contact: user?.phone || "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }
  console.log("sending")
      const { data } = await axios.post(backendUrl + "/api/user/pay-razor",
        { planId }, { headers: { token } });

      if (data.sucess) {
        initPay(data.order);
      } else {
        toast.error(`Failed to create order! ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Payment initiation failed. Try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10"
    >
      <button className="border border-gray-600 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-3xl font-medium mb-6 sm:mb-10">Choose the plan</h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
          >
            <img width={40} src={assets.logo_icon} alt="Plan Icon" />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">Rs {item.price}</span> / {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
