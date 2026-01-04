const vscode = require("vscode");
const { exec } = require("child_process");
const path = require("path");

function activate(context) {
    let disposable = vscode.commands.registerCommand("jawir.runScript", function () {

        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const file = editor.document.fileName;
        const interpreter = path.join(context.extensionPath, "interpreter", "jawir-runner.js");

        exec(`node "${interpreter}" "${file}"`, (err, stdout, stderr) => {
            vscode.window.showInformationMessage(stdout || stderr);
        });

    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;