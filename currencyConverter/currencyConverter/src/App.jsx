import { useState } from 'react';
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/input';


function App() {
  let [to, setTo] = useState("bdt")
  let [from, setFrom] = useState('usd')
  let [amount, setAmount] = useState(0)
  let [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
    
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/4386322/pexels-photo-4386322.jpeg?auto=compress&cs=tinysrgb&w=1000')`,
            width: '100%',
            
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption = {options}
                            onCurrencyChange={(currency) => {setFrom(currency)}}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-800 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption = {options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisabled
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-800 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()} 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
