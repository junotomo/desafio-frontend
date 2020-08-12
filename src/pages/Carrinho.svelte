<script>
  import {produtos} from '../store/produtos.js'
  import CarrinhoItem from '../components/CarrinhoItem.svelte'

  let sum = 0
  let cartItens = 0
  //calculo do valor total
  $: {
    let temp = 0
    let counter = 0
    for (let item of $produtos) {
      counter += item.quantity
      temp += item.unitPrice * item.quantity
    }
    cartItens = counter
    sum = temp
  }
</script>

<div class='carrinho_container'>
  {#each $produtos as item}
    <CarrinhoItem  {item}/>
  {/each}
</div>
<div class='total_container'>
<span>Qtd total: {cartItens}</span>
  <span>Preço total: R$ {sum}</span>
</div>

<style>

.carrinho_container{
  margin-bottom: 50px;
  margin: auto;
  max-width: 700px;
}

.total_container{
  display: grid;
  grid-auto-flow: column;
  position: fixed;
  bottom: 0;
  height: 20px;
  text-align: center;
  background-color: var(--green);
  width: 100%;
  font-weight: bold;
  padding: 7px;
  color: white;
}

</style>
