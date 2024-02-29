import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import PaymentSuccessModal from '../Components/utils/paymentSuccess';
import {  useNavigate } from "react-router-dom";
import { cartActions } from '../Store/cartSlice';

function Checkout() {
	
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [isPaying, setIsPaying] = useState(false)
    const cartItems =  useSelector((state) => state.cart.items)



  const cartTotal = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );


  function handleSubmit(event){
	setIsPaying(true)
	event.preventDefault()

	setTimeout(() => {
		setModalIsOpen(true)
        
        setIsPaying(false)
      }, 2000)
     }

  const closeModal = () => {
	
    setModalIsOpen(false);
	dispatch(cartActions.resetCart())

	navigate('..')
   
    
  };

  return (<> 
    <form onSubmit={handleSubmit} className="flex sm:mt-10 md:mt-0 items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">

	
	<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
		<div className="lg:col-span-2">
			<h2 className="text-sm font-medium">Payment Method</h2>
			<div className="bg-white rounded mt-4 shadow-lg">
				<div className="flex items-center px-8 py-5">
						<input className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100" type="radio"/>
						<label className="text-sm font-medium ml-4">PayPal</label>
					</div>
				<div className="border-t">
					<div className="flex items-center px-8 py-5">
						<input className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600" type="radio"/>
						<label className="text-sm font-medium ml-4">Credit Card</label>
					</div>
					<div className="grid grid-cols-2 gap-4 px-8 pb-8">
						<div className="col-span-2">
							<label className="text-xs font-semibold" htmlFor="cardNumber">Card number</label>
							<input required minLength={16} maxLength={16} className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="0000 0000 0000 0000"/>	
						</div>
						<div className="">
							<label className="text-xs font-semibold" htmlFor="cardNumber">Expiry Date</label>
							<input required className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="MM/YY"/>	
						</div>
						<div className="">
							<label className="text-xs font-semibold" htmlFor="cardNumber">CVC/CVV</label>
							<input required maxLength={3} minLength={3} className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..."/>	
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h2 className="text-sm font-medium">Purchase Summary</h2>
			<div className="bg-white rounded mt-4 shadow-lg py-6">
				<div className="px-8">
					<div className="flex items-end">
						
							<option className="text-sm font-medium focus:outline-none -ml-1" value="">Products Total Price</option>
							
						
						<span className="text-sm ml-auto font-semibold">&#8377;{cartTotal}</span>
						
					</div>
					
				</div>
				<div className="px-8 mt-4">
					<div className="flex items-end justify-between">
						<span className="text-sm font-semibold">Tax</span>
						<span className="text-sm text-gray-500 mb-px">8%</span>
					</div>
				</div>
				<div className="px-8 mt-4 border-t pt-4">
					<div className="flex items-end justify-between">
						<span className="font-semibold">Total Amount</span>
						<span className="font-semibold">&#8377;{parseFloat((cartTotal*1.08).toFixed(0))}</span>
					</div>
		
				</div>
				
				<div className="flex flex-col px-8 pt-4">
					<button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">{isPaying ? "Payment in Process.." : "Pay Securely"}</button>
					
				</div>
			</div>
		</div>
	</div>
	

</form>
<PaymentSuccessModal isOpen={modalIsOpen} closeModal={closeModal} /></>
  )
}

export default Checkout