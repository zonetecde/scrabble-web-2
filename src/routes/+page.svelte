<script lang="ts">
	import GameFinder from './GameFinder.svelte';

	import { onMount } from 'svelte';
	import { AppVariables } from '../ws/AppVariables';

	onMount(() => {
		AppVariables.initWsConnection();

		AppVariables.socket.onopen = () => {
			console.log('WebSocket connection established');
			// send to the server WS a request named "find-game"
			AppVariables.socket.send(
				JSON.stringify({
					event: 'userLookingForGame',
					parameters: 5
				})
			);
		};

		AppVariables.socket.onmessage = (event) => {
			console.log(`Received message: ${event.data}`);
		};

		AppVariables.socket.onclose = (event) => {
			console.log(`WebSocket connection closed with code ${event.code}`);
		};
	});
</script>

<div class="w-screen h-screen flex justify-center items-center bg-bg">
	<GameFinder />
</div>
