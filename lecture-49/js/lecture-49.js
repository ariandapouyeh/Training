var circel = {
	radius: 10, 
	getArea: function() {
		return Math.PI * Math.pow(this.radius, 2)
	}
}
console.log(circel.getArea());