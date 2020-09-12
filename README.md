Repro repo for https://github.com/microsoft/vscode/issues/106414

Using the new [vscode js debug](microsoft/vscode-js-debug), switchable with the `debug.javascript.usePreview` setting, the control bar does not retain state between multiple sessions.
This is apparent when debugging a compound debug config containing both a launch and attach session.

![Sep-12-2020 09-52-54](https://user-images.githubusercontent.com/61341/92991851-4a9de400-f4de-11ea-860a-35a82833e1e1.gif)
