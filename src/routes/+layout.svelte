<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	export const prerender = true;
</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</svelte:head>

<Navbar></Navbar>
<slot></slot>
