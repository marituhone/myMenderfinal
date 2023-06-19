import { useState } from 'react';

function Payment() {
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing logic here
    // You can send an API request to process the payment

    // Reset the form
    setPaymentAmount('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white rounded shadow-lg">
        <div className="bg-blue-500 py-4 px-6 rounded-t">
          <h2 className="text-2xl font-bold text-white">Payment Page</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handlePaymentSubmit}>
            <div className="mb-6">
              <label htmlFor="paymentAmount" className="block text-gray-700">
                Payment Amount
              </label>
              <input
                type="text"
                id="paymentAmount"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter payment amount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
