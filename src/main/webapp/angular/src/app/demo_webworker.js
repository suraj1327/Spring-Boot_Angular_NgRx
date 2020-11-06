var timer=0;

export function increment(){
    timer=timer+1;
    postMessage(timer);
    setTimeout("increment()",500);
}
