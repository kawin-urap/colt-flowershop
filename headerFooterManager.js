class SpecialHeader extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    
    <nav class="navbar">
        <a href="#home">Home</a>
        <!--<a href="#about">About</a>-->
        <a href="pages/about.html">About</a>
        <!--<a href="#products">Products</a>-->
        <a href="pages/products.html">Products</a>
        <!--<a href="#review">Review</a>-->
        <a href="pages/review.html">Review</a>
        <!--<a href="#contact">Contact</a>-->
        <a href="pages/contactUs.html">Contact</a>
    </nav>    
    `    
  }
}

customElements.define('special-header', SpecialHeader)