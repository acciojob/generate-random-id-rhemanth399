function makeid(l) {
  // write your code here
	let a=''
  let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','u','w','x','y','z']
  for(let i=0;i<l;i++)
  {
     
   a+=letters[Math.floor(Math.random()*letters.length)]
  
  }
  
   return a;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
