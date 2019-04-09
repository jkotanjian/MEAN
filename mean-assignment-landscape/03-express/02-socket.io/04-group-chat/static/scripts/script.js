$(document).ready(function () {
	var socket = io();
	var current_user;

	var new_user = function() {
		var name = prompt("What is your name? Enter a username if your name is already taken.");
		socket.emit('page_load', {user: name});
	}
	new_user();
			
	socket.on('existing_user', function(data) {
		$('.lead').after(data.alert);
		$('form').detach();
	});	

	socket.on('load_messages', function(data) {
		var messages = data.messages;
		var messageThread = "";
		current_user = data.current_user;

		for (var i = 0; i < messages.length; i++) {
			messageThread += '<p><b>' + messages[i].name + '</b>' + ": " + messages[i].message + '</p>';
		}
		$('.msgs').append(messageThread);
		$('.lead').append(data.current_user);
	});	

	$('form').submit(function(e) {
		e.preventDefault();
		socket.emit('new_message', {message: $('input').val(), user: current_user});
	});

	socket.on('chat', function(data) {
		$('.msgs').append('<p><b>' + data.user + '</b>' + ": " + data.new_message + '</p>');
	});

	socket.on('disconnected', function(data) {
		alert("A user has left the chat");
	});
});	