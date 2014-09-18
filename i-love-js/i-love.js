/* FUN WITH JS */

/* same output for both lines, fun! :) */
i=0;while(--i<10)console.log(++i-+-++i);
console.log();
i=0;while(--i<10)console.log(i++-+-i++);
console.log();
console.log();
/* second output is first output -2 :p */
i=0;while(--i<10)console.log(++i-+-i++);
console.log();
i=0;while(--i<10)console.log(i++-+-++i);
