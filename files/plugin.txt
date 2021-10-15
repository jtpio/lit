{
  id: 'MySuperCoolTogglePlugin',
  autoStart: true, // Activate this plugin immediately
  requires: ["@jupyterlab/apputils:ICommandPalette"],
  activate: function(app, palette) {
    let commandID = "MySuperCoolToggle";
    let toggle = true; // The current toggle state
    app.commands.addCommand(commandID, {
      label: 'My Super Cool Toggle',
      isToggled: function() {
        return toggle;
      },
      execute: function() {
        // Toggle the state
        toggle = !toggle;
      }
    });

    palette.addItem({
      command: commandID,
      // Sort to the top for convenience
      category: "AAA"
    });
  }
}
