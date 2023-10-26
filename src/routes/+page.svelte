<script lang="ts">
	import * as signalR from '@microsoft/signalr';
	import { onMount } from 'svelte';
	import SignalRManager from '../ws/signalRManager';
	import { AppVariables } from '../ws/AppVariables';

	onMount(() => {
		new SignalRManager();

		AppVariables.Connection.on('UpdateWaitGame', function (gameJson: string) {});

		AppVariables.Connection.on('GameHasBegun', function (gameJson: string) {});
	});

	function handle() {
		AppVariables.Connection.invoke('UserSearchingForGame', 'tt', 5).catch(function (err) {
			return console.error(err.toString());
		});
	}
</script>
