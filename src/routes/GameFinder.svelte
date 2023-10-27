<script lang="ts">
	import { onMount } from 'svelte';
	import { AppVariables } from '../ws/AppVariables';

	let choosedNumberOfPlayer: number = 2;
</script>

<div
	class="w-11/12 h-5/6 lg:w-4/12 md:8/12 md:h-4/6 border-2 border-black shadow-2xl shadow-black rounded-3xl bg-amber-200 flex items-center px-5 py-10 md:py-20 flex-col"
>
	<h1 class="text-2xl md:text-4xl font-bold text-amber-900">Scrabble Web</h1>
	<input
		bind:value={AppVariables.username}
		type="text"
		class="w-11/12 md:w-10/12 mb-7 mt-8 md:mt-10 py-2 md:py-4 rounded-full px-7 outline-none border-2 border-amber-800 shadow-amber-900 shadow-lg hover:scale-105 duration-100"
		placeholder="username"
	/>

	<div class="flex mb-5 flex-row items-center my-auto justify-center w-10/12 h-fit flex-wrap gap-2">
		{#each [2, 3, 4, 5] as numberOfPlayer}
			<button
				on:click={() => {
					choosedNumberOfPlayer = numberOfPlayer;
				}}
				class={'px-5 md:px-12 py-3 md:py-10 hover:scale-105 rounded-lg text-2xl cursor-pointer duration-100 bg-white border-2 border-amber-800 flex items-center justify-center ' +
					(choosedNumberOfPlayer === numberOfPlayer
						? 'bg-amber-800 border-amber-950 text-white'
						: 'text-amber-800')}
			>
				{numberOfPlayer}
			</button>
		{/each}
	</div>

	<button
		class="px-8 py-4 mt-auto text-xl hover:bg-yellow-500 duration-100 shadow-black active:shadow-black shadow-lg active:shadow-2xl bg-amber-400 border-2 border-amber-900 text-black rounded-xl"
		>Find a game</button
	>
</div>
