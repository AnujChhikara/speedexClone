import React from 'react';
import Modal from 'react-modal';

const PaymentSuccessModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Payment Success Modal"
      className='mt-40 w-screen flex flex-col justify-center items-center'
      ariaHideApp={false}
    >
        <div className='w-1/3 text-gray-400 rounded-lg bg-gray-800 h-80 flex flex-col pt-6 px-4 items-center space-y-8'>
      <h2 className='text-4xl font-bold text-green-500'>Payment Successful!</h2>
     <div className='flex flex-col items-center'>
      <p>Your payment has been successfully processed, and we are now preparing to dispatch your item.</p>

<p>Once your item is shipped, you will receive a confirmation email with the tracking details. </p>


</div>
      <button className='bg-gray-500 hover:bg-gray-400 px-4 py-2 text-lg font-semibold rounded-xl text-white' onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default PaymentSuccessModal;