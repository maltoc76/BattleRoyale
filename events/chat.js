'use strict';

events.Add('chat_message', (player, message) => {
    return `${player.name}: ${message}`;
});

events.AddRemoteCallable('chat_ready', player => {
  gm.chat.send(player, 'Welcome to my Server!', new RGB(0, 255, 0));
  gm.chat.send(player, '<em>Type /help to see a list of all commands</em>');
  gm.chat.send(player, 'the first spawn might take up to a couple of minutes.', gm.config.color.red);
});