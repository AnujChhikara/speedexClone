import React from 'react';
import Modal from 'react-modal';

const PaymentSuccessModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Payment Success Modal"
      className='w-screen h-screen  '
      ariaHideApp={false}
    >
      <div className='mt-40 flex flex-col justify-center items-center '>
        <div className='md:w-1/4 sm:w-11/12 sm:h-[340px] md:h-auto text-gray-500 font-mono rounded-lg bg-purple-200 h-80 flex flex-col pt-6 pb-2 px-4 items-center space-y-6'>
      <h2 className='md:text-4xl sm:text-3xl font-bold text-green-400'>Payment Successful!</h2>
     <div className='flex flex-col text-center items-center space-y-2 md:w-80'>
      <p>Your payment has been successfully processed, and we are now preparing to dispatch your item.</p>

<p>Once your item is shipped, you will receive a confirmation email with the tracking details. </p>


</div>
      <button className='bg-gray-800 hover:bg-gray-700 px-4 py-2 text-lg font-semibold rounded-xl text-white' onClick={closeModal}>Shop More..</button>
      </div></div>
    </Modal>
  );
};

export default PaymentSuccessModal;