// this is this.
// this.audio is this.  ------> relate to base tokens. -> least recently used.
// this.video is this.    ------> relate to base tokens.   -> least recently used.
// this.canvas is this.    ------> relate to base tokens.  -> least recently used.
// this.pixel is this. ------> relate to base tokens.      -> least recently used.
// this.dictionaries is this.  ------> relate to base tokens.  -> least recently used.
// this.DOM is this.   ------> relate to base tokens.  -> least recently used.
// this.env is this.   ------> relate to base tokens.  -> least recently used.
// ...  
// ...
// m training examples.
// (x(i), y(i)) 
//what is the probability of y = 1, given x, parameterized by theta.
// p(y = 1 | x; theta) = h(theta * x) = 1 / (1 + e^(-theta * x))
// h(x) = 1 / (1 + e^(-x))
let x = 0;
let y = 0;
let theta = 0;
let h = 0;
// i.mlearning.me (LRU) Cache
// this.be _______  ______%%
// this.be _______  ______%%
// this.be _______  ______%%
// this.be _______  ______%%
// this.be _______  ______%%
// Show 5 top highest probability of y = 1, given x, parameterized by theta.
