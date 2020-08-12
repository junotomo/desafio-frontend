<script>
  import Card from '../components/Card.svelte'
  import InfiniteLoading from 'svelte-infinite-loading'

  let fetchData = []

  const fetchProducts = async () => {
    const response = await fetch('https://private-3efa8-products123.apiary-mock.com/products')
    .then(response => response.json())
		.then(data => {
      for (let item of data.products) {
        fetchData = [...fetchData, item]
      }
    })
  }

  window.addEventListener('scroll', () => {
  	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  	if(clientHeight + scrollTop >= scrollHeight - 5) {
  		fetchProducts()
  	}
  })
</script>

<div class='container_product_list'>

  {#each fetchData as product}
    <Card {product} />
  {/each}
  <InfiniteLoading  on:infinite={fetchProducts}/>
</div>

<style>
.container_product_list{
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
}
</style>
