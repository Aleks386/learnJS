// Task: Implement a class named 'Ranges' 
// Example of a range [1, 4] - includes integers: 1, 2, 3, and 4. // Example of a list: [1, 4], [109, 206], [400, 600] 


class Ranges {   /**    * Adds a range to the list    */
  add(range) { 
    return myArr = this.range; 
        // TODO: implement this   
  }

  /**    * Removes a range from the list    */
  remove(range) {     // TODO: implement this   
  }
  /**    * Prints out the list of ranges    */
  print() {  
    console.log(myArr);   // TODO: implement this   
  }
}
// Example 
const f = new Ranges(); 
f.add([1, 4]); f.print(); // Should display: [1, 4] 
r.add([10, 20]); r.print(); // Should display: [1, 4] [10, 20] 
r.add([10, 10]); r.print(); // Should display: [1, 4] [10, 20] 
r.add([21, 21]);r.print(); // Should display: [1, 4] [10, 21] 
r.add([2, 4]); r.print(); // Should display: [1, 4] [10, 21] 
r.add([3, 8]); r.print(); // Should display: [1, 8] [10, 21] 

r.remove([10, 10]); r.print(); // Should display: [1, 8] [11, 21] 
r.remove([10, 11]); r.print(); // Should display: [1, 8] [12, 21] 
r.remove([15, 17]); r.print(); // Should display: [1, 8] [12, 14] [18, 21] 
r.remove([3, 19]); r.print(); // Should display: [1, 2] [20, 21]