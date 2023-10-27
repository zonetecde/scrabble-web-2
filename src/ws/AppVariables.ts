export class AppVariables {
	static randomUsername(): string {
		return 'user' + Math.floor(Math.random() * 100000);
	}
	static ApiUrl: string = 'https://localhost:7133';

	static username: string = this.randomUsername();

	static socket: WebSocket;
	static initWsConnection() {
		this.socket = new WebSocket('ws://localhost:3000/scrabble-server');
	}
}
