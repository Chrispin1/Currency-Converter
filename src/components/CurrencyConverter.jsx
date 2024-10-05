const CurrencyConverter = () => {
  //Currencies:https://api.frankfurter.app/currencies
  //Conversion:https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
  return (
    <div className="max-w-xl mx-auto my-10 p-5 shadow-md bg-white rounded-lg">
      <div className="mb-5 text-2xl font-semibold text-gray-700 ">
        Currency Converter
      </div>
    </div>
  );
};

export default CurrencyConverter;
