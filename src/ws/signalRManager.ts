import * as signalR from '@microsoft/signalr';
import { AppVariables } from './AppVariables';

class SignalRManager {
	constructor() {
		// Connection SignalR
		AppVariables.Connection = new signalR.HubConnectionBuilder()
			.withUrl(AppVariables.ApiUrl + '/scrabbleHub')
			.configureLogging(signalR.LogLevel.Information)
			.build();

		// Pour maintenir la connection
		AppVariables.Connection.onclose(async () => {
			await this.start();
		});

		// Connect to the server
		this.start();
	}

	// Start the connection
	async start() {
		try {
			await AppVariables.Connection.start();
			console.log('SignalR Connected.');
		} catch (err) {
			console.log(err);
			setTimeout(() => this.start(), 5000);
		}
	}
}

export default SignalRManager;
