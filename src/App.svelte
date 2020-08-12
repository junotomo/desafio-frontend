<script>
	import Tab, {Icon, Label} from '@smui/tab'
	import TabBar from '@smui/tab-bar'
	import Produtos from './pages/Produtos.svelte'
	import Carrinho from './pages/Carrinho.svelte'
	import Top from './pages/Top.svelte'
	import Cart from './assets/Cart.svelte'
	import {produtos} from './store/produtos.js'

	let active = 'Produtos'
	let currentTab = Produtos
	let inCartProducts = 0
	//paginacao das abas
	const next = () => {
		if (active === 'Top 5') {
			currentTab = Top
		}else if (active === 'Produtos') {
			currentTab = Produtos
		}else {
			currentTab = Carrinho
		}
	}
	// contador de produtos no carrinho
	$:{
		inCartProducts = 0
		for (let item of $produtos) {
			inCartProducts += item.quantity
		}
	}
</script>

<Cart />

<TabBar tabs={['Produtos', 'Top 5', 'Carrinho']} let:tab bind:active on:click={next} >
		<Tab {tab}>
			{#if tab ==='Carrinho'}
			<svg class='cart_icon'>
				<use xlink:href="#cart" />
			</svg>
			{#if $produtos.length > 0}
				<div class="product_counter">
				{inCartProducts}
				</div>
			{/if}
			{:else}
				<Label>{tab}</Label>
			{/if}
		</Tab>

	</TabBar>
<svelte:component this={currentTab}/>
<style>
.product_counter{
	background-color: var(--red);
	color: white;
	width: 18px;
	height: 18px;
	border-radius: 16px;
	text-align: center;
	font-size: 11px;
	position: absolute;
	bottom: 5px;
	right: 6px;
	line-height: 18px;
}

.cart_icon{
	width: 45px;
	height: 30px;
	fill: white;
	padding: 5px;
}

</style>
