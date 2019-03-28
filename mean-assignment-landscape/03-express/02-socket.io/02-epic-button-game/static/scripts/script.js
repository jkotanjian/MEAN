$(document).ready(function () {
	var socket = io();
	
	$('.btn.btn-primary').click(function() {
		socket.emit('add', function () {
		});	
	});			
	$('.btn.btn-danger').click(function() {
		socket.emit('reset', function() {
		});	
	});	
	socket.on('counter', function(data) {
    	$('.counter').html(data.counter);
	});
});