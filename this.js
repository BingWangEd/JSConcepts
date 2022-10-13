// Good exercises: https://dmitripavlutin.com/javascript-this-interview-questions/

// https://www.geeksforgeeks.org/this-in-javascript/?ref=lbp

<!DOCTYPE html>
<html>
<body>
<script>
	let add = {
		num : 0,
		calc : function() {

		// logs the add object
		document.write(this + ' ')

		function innerfunc() {
			this.num += 1;

		// logs the window object
		document.write(this + ' ');

		return this.num

	} return innerfunc();
	}
};

// what does it log here?
document.write(add.calc() + '<br>');

// what does it log here?
document.write(add.calc());
</script>				
</body>
</html>

logMessage.call(object)