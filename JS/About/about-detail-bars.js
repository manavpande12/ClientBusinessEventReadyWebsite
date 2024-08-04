const bars = document.querySelectorAll('.btn-bars');

bars.forEach(bar => {
  bar.addEventListener('click', (event) => {

    // Apply styles to the clicked bar
    bar.style.backgroundImage = "none";
    const imgBox = bar.querySelector('.boxsec2');
    imgBox.style.transform = "translateY(0%) translateX(0%) rotate(0deg) scale(1)";
    const img = bar.querySelector('img');
    img.style.filter = "none";
    img.style.filter = "drop-shadow(0 0 0.75rem rgb(255, 255, 255))";
    img.style.animation = "filter 2s ease-in infinite";
    const textBox=bar.querySelector('h1');
    textBox.style.color="#fff";

    // Reset styles for all bars except the clicked one
    bars.forEach(otherBar => {
      if (otherBar !== bar) {
        otherBar.style.backgroundImage = "";
        const otherImgBox = otherBar.querySelector('.boxsec2');
        otherImgBox.style.transform = "";
        const otherImg = otherBar.querySelector('img');
        otherImg.style.filter = "";
        otherImg.style.animation = "";
        const otherTextBox=otherBar.querySelector('h1');
        otherTextBox.style.color="";
      }
    });

    
  });
});