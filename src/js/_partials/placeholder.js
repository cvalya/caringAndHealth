$(function() {
	var placeholder = (function() {
			$('input').placeholder({ customClass: 'style-placeholder' });
			console.log('проверка подключения jquery placeholder');
		})();
})