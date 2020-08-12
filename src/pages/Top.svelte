<script>
  import Card from '../components/Card.svelte'
  import {viewedProducts} from '../store/produtos.js'
  //pega os top 5 produtos
  let sorted = $viewedProducts.sort((a, b) => {
    if(a.views > b.views) { return -1 }
    if(a.views < b.views) { return 1 }
    return 0
  })
  let top
  if (sorted.length > 5) {
    top = sorted.slice(0, 5)
  } else {
    top = sorted
  }

</script>
<div class='container_top_list'>
  {#each top as product, i}
    <Card {product} />
  {/each}
</div>

<style>
.container_top_list{
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
}


</style>
