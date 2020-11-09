function getArea(length, width) {
    let area=length * width;
   
    
    return area;
}

function getPerimeter(length, width) {
    let perimeter= (2*length) + (2*width);
    
    
    return perimeter;
}


function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}
