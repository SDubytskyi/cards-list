export default class Card {
    constructor (someProduct) {

          this.state = someProduct;
          this.myRender();

      }

      getMyTemplate () {
        return `
          </div>
          <div class="product-card col-lg-4 col-m-4" >
            <div class="img-wrapper" style=" background-image: url(${this.state.images[0]})";>
              
            </div>
            <div class="wrapper-content">
              <div class="offer">
                <div class="product-rating">
                  <p class="product-rating-number">${this.state.rating}</p>
                  <img class="product-rating-star" src="./img/Star1.svg" alt="star">
                </div>
                <p class="product-price">15999</p>
              </div>
              <p class="product-description">${this.state.title}</p>
              <p class="product-categories">${this.state.category}</p>
            </div>
            <button class="btn" type="button">Add To Cart</button>
          </div> 
          `;
      }

      myRender () {
          const wrapper = document.createElement('div');

          wrapper.innerHTML = this.getMyTemplate();
          
          this.element = wrapper 
      }
  }