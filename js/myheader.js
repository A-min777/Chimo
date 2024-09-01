const myHeader = {
  template: `
    <header v-if="showAd" class="ad-banner text-center ">Welcom to Chimo! 
      <button v-on:click="closeAd" class="btn btn-outline-light btn-sm ms-2 ps-">X</button>
    </header>
    <header class="navbar d-flex pt-3 border-bottom border-2">
       <a href="index.html"><img src="../images/LOGO.png" alt="Logo" height="60px" class="ps-5"></a>
       <button class="btn btn-lg ps-5">分類▼</button>
       <form id="searchbar" class=" d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="搜尋課程" aria-label="Search">
      </form>
       <nav>
          <ul class="d-flex pt-2 pe-5">
           <li><button class="btn btn-lg">我的課程</button></li>
           <li><img src="images/cart.png" alt="cart" class="btn align-middle"></li>
           <li><img src="images/bell.png" alt="bell" class="btn"></li>
         </ul>
       </nav>
    </header>`,
  setup() {
    const showAd = ref(true);
    const closeAd = () => {
      showAd.value = false;
    };

    return {
      showAd,
      closeAd,
    };
  },
};
