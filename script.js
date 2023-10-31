cursor.style.transform = "scale(1)";

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");
    
    document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });
    
    cursor.style.transition = "transform 0.2s ease"; 
    
    document.addEventListener("mouseover", (e) => {
        cursor.style.transform = "scale(1)";
    });
    
    document.addEventListener("mouseout", (e) => {
        cursor.style.transform = "scale(0.9)";
    });
});
