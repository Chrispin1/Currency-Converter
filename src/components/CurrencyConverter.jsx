const CurrencyConverter = () => {
  //Currencies:https://api.frankfurter.app/currencies
  //Conversion:https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
  return (
    <div className="max-w-xl mx-auto my-10 p-5 shadow-md bg-white rounded-lg ">
      <div className="mb-5 text-2xl font-semibold text-gray-700 ">
        Currency Converter
      </div>

      <div>Dropdowns</div>

      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded-md shadow-md focus:outline-none p-2 focus:ring-2 focus:ring-indigo-500 mt-1"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button className="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-indigo-500 transition-all text-right ">
          Convert
        </button>
      </div>
      <div className="mt-4 text-lg font-medium text-green-600">
        Converted Amount: 700 USD
      </div>
    </div>
  );
};

export default CurrencyConverter;
