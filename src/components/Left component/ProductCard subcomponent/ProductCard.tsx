import { useState } from 'react'
import './ProductCard.css'

export function ProductCard(props:any) {
  const [cost, setCost] = useState(props.price)
  const [quantity, setQuantity] = useState(1)
  const [general, setGeneral] = useState(cost * quantity)
  const [display, setDisplay] = useState('flex')
  
  return (
    <div>
      <div style={{display:display}} className="productCard" >
      <img className="productPic" src={props.image} />

      <div className="productInfo">
        <div>
          <h2>НАЗВАНИЕ: <span>{`${props.title}`}</span></h2>
          <h2>ЦЕНА: <span>{`${props.price} $`}</span></h2> 
        </div>
        <div>
          <p>ОПИСАНИЕ: <span>{`${props.description}`}</span></p>
        </div>
        <div>
          <h2>КОЛИЧЕСТВО: <span>{`${quantity}`}</span></h2>
        </div>
        <div className="buttons">
          <div className='plus'>
            <button onClick={() => {
              if (quantity < 10) {
                props.setIntermediate(props.intermediate + cost)
                setQuantity(quantity + 1)
                setGeneral(cost * quantity)
              }
              else{
                return(
                  alert("Больше десяти товаров в одни руки нельзя!")
                )
              }
            }}>+</button>
          </div>
          <div className="minus">
          <button onClick={() => {
            if (quantity > 1) {
                props.setIntermediate(props.intermediate - cost)
                setQuantity(quantity - 1)
                setGeneral(cost * quantity)
            }
            else{
              return(
                alert("Меньше одного товара в корзине быть не может, если вы хотите удалить товар из корзины - нажмите на урну! " +
                "Карточка с товаром исчезнет из списка, стоимость минусуется из общей суммы. "+
                "Чтобы товар снова появился - вам потребуется обновить страницу.")
              )
            }
          }}>—</button>
          </div>
          <div className="delete">
          <button onClick={() => {
            setGeneral(cost * quantity)
            setDisplay('none')
            if(quantity > 1) {
              props.setIntermediate(props.intermediate - general - cost)
            }
            else{
              props.setIntermediate(props.intermediate - cost)
            }
            }}></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

