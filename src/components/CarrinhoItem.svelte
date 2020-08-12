<script>
  import {produtos} from '../store/produtos.js'

  export let item

  //adiciona mais
  const add = () => {
    item.quantity++
    $produtos = $produtos
    if (item.quantity === 0) disabled = false
  }
  // subtrai a quantidade do produto
  const subtract = () => {
    item.quantity--
    $produtos = $produtos
    if (item.quantity < 1) remove()
  }
  // remove itens do carrinho
  const remove = () => {
    $produtos = $produtos.filter(product => product.id !== item.id)
  }
</script>

<div class='cartItem_container'>
  <img class='img' src={item.image} alt="">
  <div class='cartItem_info'>
    <span class='cartItem_name'>{item.name}</span>
    <span class='cartItem_stock'> Quantidade em estoque: {item.unitsInStock}</span>
  </div>
  <div class='cartItem_price'>
    <span class='cartItem_title'>Preço:</span>
    <span class='cartItem_price_value'>R$ {item.unitPrice}</span>
  </div>
  <div class="cartItem_value">
    <div class="quantity_control">
      <button class='cartItem_btn cartItem_value_plus' on:click={add}>
        <svg class='cart_icon'>
          <use xlink:href="#plus" />
        </svg>
      </button>
      <span class="display_qtd">{item.quantity}</span>
      <button class='cartItem_btn cartItem_value_minus' on:click={subtract}>
        <svg class='cart_icon_minus'>
          <use xlink:href="#minus" />
        </svg>
      </button>
    </div>

    <button class='cartItem_btn cartItem_delete' on:click={remove}>
      <svg class='cart_trash_icon'>
        <use xlink:href="#trash" />
      </svg>
    </button>
  </div>
</div>

<style>

  .cartItem_container{
    display: grid;
    grid-template-areas: 'img info price control';
    grid-template-columns: repeat( auto-fit,140px minmax(140px, 1fr));
    max-width: 715px;
    margin: 1em;
    padding: 1em;
    grid-gap: 1em;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 7px;
    background-color: white;
    font-size: 13px;
    color: var(--darkgray);
  }

  .img{
    grid-area: img;
    width: 130px;
  }

  .cartItem_info{
    display: grid;
    grid-area: info;
  }

  .cartItem_name{
    font-weight: bold;
  }

  .cartItem_price{
    display: grid;
    grid-area: price;
    text-align: center;
  }

  .cartItem_title{
    font-weight: bold;
  }
  .cartItem_price_value{
    color: #7474d4;
    font-weight: 500;
  }
  .cartItem_value{
    display: grid;
    grid-template-areas:
      'control delete';
  }

  .quantity_control{
    display: grid;
    grid-area: control;
    border: 1px solid var(--darkgray);
    border-radius: 5px;
    grid-auto-flow: column;
    height: 40px;
    margin: auto;
  }

  .cartItem_btn{
    border: none;
    background: white;
    outline: none;
    margin: auto;
  }

  .display_qtd{
    text-align: center;
    font-weight: bold;
    line-height: 40px;
    width: 50px;
    border-left: 1px solid var(--darkgray);
    border-right: 1px solid var(--darkgray);
  }

  .cartItem_delete{
    grid-area: delete;
  }

  .cart_icon{
    width: 15px;
    height: 14px;
    fill: var(--green);
    padding: 5px;
  }
  .cart_icon_minus{
    width: 15px;
    height: 14px;
    fill: var(--green);
    padding: 5px;
  }
  .cart_trash_icon{
    width: 25px;
    height: 30px;
    fill: var(--darkgray);
  }

  @media (max-width: 380px) {
		.cartItem_container {
		    grid-template-areas:
          'img info'
          'img price'
          'value  value';
        grid-gap: 0px;
        grid-row-gap: 1em;
		}

    .cartItem_info{
      margin: 0px;
    }

    .cartItem_price{
      grid-template-columns: 1fr 1fr;
      border-top: 1px solid var(--darkgray);
      text-align: unset;
    }


    .cartItem_price_value{
      text-align: end;
    }
    .cartItem_value{
      grid-area: value;
      grid-template-areas:
        'delete control';
    }

    .quantity_control{
      display: grid;
      grid-area: control;
      border: 1px solid var(--darkgray);
      border-radius: 5px;
      grid-auto-flow: column;
      margin: 0px;
      height: 100%;
    }

    .display_qtd{
      line-height: 35px;
      width: 100%;
    }

    .cart_icon_minus{
      width: 15px;
      height: 10px;
      fill: var(--green);
      padding: 5px;
    }
	}

</style>
