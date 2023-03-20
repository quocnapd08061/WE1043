//bài 1

//nhap gia tri a , b , c  tu ban phim
let a = parseInt(prompt("Nhap a: "));
let b = parseInt(prompt("Nhap b: "));
let c = parseInt(prompt("Nhap c: "));
//dental
let delta = b * b - 4 * a * c;
if (delta < 0){
    console.log("Phuong trinh vo nghiem " );
}else if(delta == 0){
    let x= -b /(2*a);
    console.log("Phuong trinh co nghiem x=",x);
} else{
    let x1=(-b+Math.sqrt(delta))/(2*a);
    let x2=(-b-Math.sqrt(delta))/(2*a);
    console.log("Phuong trinh co 2 nghiem phan bien la x1=",x1,"x2=",x2 );
}
