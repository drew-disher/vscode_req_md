// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as child from 'child_process';

const REQ_MD_PATH = 'C:/dev/req_md/target/debug/req_md.exe'
const MARKDOWN_PATH = '/dev/req_md/target/debug/samples/get-google.md'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('"reqmdcaller" is now active.');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('reqmdcaller.req_md', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

        const res = child.execFileSync(REQ_MD_PATH, [MARKDOWN_PATH]);

		let editor = vscode.window.activeTextEditor;

		let selection = editor?.document.offsetAt(editor.selection.active)

		vscode.window.showInformationMessage(
		'Cursor Selection: ' + selection +'\n'
		+ 'resposne: ' + res
		);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
