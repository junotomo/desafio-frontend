<script>
  import Details from './Details.svelte'
  import {produtos, viewedProducts} from '../store/produtos.js'

  export let product
  // adiciona item no carrinho
  const add = () => {
    for (let item of $produtos) {
      if (item.productID === product.productID) {
        product.quantity++
        $produtos = $produtos
        return
     }
   }
   product.quantity = 1
   product.views = 1
   $viewedProducts = [...$viewedProducts, product]
   $produtos = [...$produtos, product]
  }

  //funcao de adicionar views
  const view = (viewdItem) => {
    for (let viewed of $viewedProducts) {
      if (viewed.productID === viewdItem.productID) {
        viewed.views++
        $viewedProducts = $viewedProducts
        return
      }
    }
    viewdItem.views = 1
    $viewedProducts = [...$viewedProducts, viewdItem]
  }

</script>

<div class='card_container'>
  <div class='card_image_box'>
    <img class='card_img' src={product.image} alt="">
  </div>

  <div class='card_product_name_row' >
    <span class='product_name'>{product.name}</span>
  </div>

  <div class="card_product_value_row">
    <div class="product_container_stock">
      <span class='product_stock'> Em estoque:</span>
      <span class='product_stock'>{product.unitsInStock}</span>
    </div>
    <div class='product_price' on:click={add(product)}>
      <span class="price">R$ {product.unitPrice}</span>
      <svg class='cart_icon'>
      	<use xlink:href="#cart" />
      </svg>
    </div>
  </div>
  <Details on:view={view(product)}>
    <span slot="summary" class='product_stock'>Descrição</span>
    <span class='product_description'>{product.description}</span>
  </Details>
</div>

<style>
  .card_container{
    display: grid;
    max-width: 300px;
    margin: 1em;
    padding: 1em;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 7px;
    background-color: white;
    font-size: 13px;
  }
  .card_product_name_row{
    height: 30px;
  }
  .product_container_stock{
    display: grid;
    grid-auto-flow: column;
  }
  .product_container_stock span{
    margin: auto 0px;
  }
  .card_product_value_row{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .product_name, .product_stock{
    font-weight: bold;
    line-height: 33px;
    color: var(--darkgray);
  }
  .product_description{
    color: var(--darkgray);
  }
  .product_price{
    display: grid;
    grid-auto-flow: column;
    padding: 5px 10px;
    border-radius: 7px;
    text-align: center;
    background-color: var(--green);
    color: white;
    cursor: pointer;
  }
  .product_price span{
    margin: auto;
    font-weight: bold;
  }

  .card_img{
    width: 100%;
  }
  .cart_icon{
    width: 40px;
    height: 29px;
    fill: white;
    justify-self: end;
  }
</style>
