import Left from "./components/Left component/Left"
import Right from "./components/Right component/Right"
import './App.css'
import { useEffect, useState } from "react"
import { getErrorMessage } from "./errorListener/FetchErrorsHandler"
export default function App() {
  const [data, setData]:any = useState([]);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch('https://fakestoreapi.com/products');
        const result = await responce.json();
        setData(result);
        let total = 0;
        for (let i = 0; i < result.length; i++) {
          total += result[i].price
        }
        setAmount(total)
      }
      catch (error) {
        getErrorMessage(error)
      }
    };
    fetchData();
    alert('Здравствуйте, приветствую вас в галактическом магазине, на странице оплаты выбранных покупок. '+
  'Магазин обслуживается на 2х языках: земном и межгалактическом, для получения перевода описания товаров на земной - '+
  'просто наведите мышкой на текст. По условию ТЗ в корзине покупок каждого товара минимум 1 и максимум 10 единиц.')
  }, [])
  console.log(data)

  return (
    <div className="main">
      <div className="left">
      <Left
      setAmount={setAmount}
      amount = {amount}
      data = {data}
      setData = {setData}/>
      </div>
      <div className="right">
      <Right
        setAmount={setAmount}
        amount = {amount}/>
      </div>
    </div>
  )
}
