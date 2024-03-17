export default function Right(props:any) {
  
  return (
    <div>
      <header>
      <h1>КАССА | <span>PAYMENT</span></h1>
    </header>
    <footer>
      <h2>К ОПЛАТЕ: <br />{props.amount} $</h2>
      <div className="type2">
      <h2>TO BE PAID: <br /><span>{props.amount}</span> $</h2>
      </div>
    </footer>
    </div>
  )
}
