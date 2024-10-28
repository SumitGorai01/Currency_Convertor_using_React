import React ,{useId} from "react";

function InputBox({
  label, 
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId()
console.log('CO',currencyOptions);

  return (
    <div className={`bg-white p-4 rounded-lg text-xl flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/80 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent bg-cyan-100 rounded-lg px-2 py-1"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}          
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/80 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1  bg-cyan-100 cursor-pointer outline-none"
        value={selectCurrency}
        disabled={currencyDisable}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >

        {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
            {currency}
          </option>
        ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;
