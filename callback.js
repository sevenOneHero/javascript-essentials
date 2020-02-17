const iWillCallYouBack = (caller, callbackfn) => callbackfn(caller);
const callBackAutoMessage = caller => `Hey ${caller}!!! I will call you later`;

console.log(iWillCallYouBack('Ram', callBackAutoMessage));
