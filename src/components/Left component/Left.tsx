import { ProductCard } from './ProductCard subcomponent/ProductCard';
import './Left.css'

export default function Left(props:any) {
  
  return(
    <>
      <header><h1>КОРЗИНА КОСМОМАРКЕТА | <span> SPACEMARKET BASKET</span></h1></header>
      <div className="container">
        {props.data.map((item:any) => (
          <ProductCard key = {item.id}
          {...item}
          setIntermediate = {props.setAmount}
          intermediate = {props.amount}/>
        ))}
      </div>
    </>
  )
}

