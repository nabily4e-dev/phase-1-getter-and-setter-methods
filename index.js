// Add your Circle class here
/**
 * Class representing a circle.
 */
class Circle {
	/**
	 * Create a circle with a given radius.
	 * @param {number} radius - The radius of the circle.
	 */
	constructor(radius) {
		this.radius = radius
	}

	/**
	 * Get the diameter of the circle.
	 * @return {number} The diameter of the circle.
	 */
	get diameter() {
		return this.radius * 2
	}

	/**
	 * Get the circumference of the circle.
	 * @return {number} The circumference of the circle.
	 */
	get circumference() {
		return Math.PI * this.diameter
	}

	/**
	 * Get the area of the circle.
	 * @return {number} The area of the circle.
	 */
	get area() {
		return Math.PI * this.radius ** 2
	}

	/**
	 * Set the diameter of the circle and update its radius accordingly.
	 * @param {number} diameter - The new diameter of the circle.
	 */
	set diameter(diameter) {
		this.radius = diameter / 2
	}

	/**
	 * Set the circumference of the circle and update its radius accordingly.
	 * @param {number} circumference - The new circumference of the circle.
	 */
	set circumference(circumference) {
		this.radius = circumference / (Math.PI * 2)
	}

	/**
	 * Set the area of the circle and update its radius accordingly.
	 * @param {number} area - The new area of the circle.
	 */

	set area(area) {
		this.radius = Math.sqrt(area / Math.PI)
	}
}
