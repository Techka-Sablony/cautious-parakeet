---
home: true
heroText: Dokumentace Shopteťák.cz
tagline: Vítejte v dokumentační aplikaci doplňků Shopteťák.cz!
---

<div class="templates">
  <h2 class="heading">
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9H21M9 21V9M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="#1E1E1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Šablony 
  </h2>
  <div class="products">
    <Product-NewProduct
        v-for="item in recents" 
        :key="item.title" 
        :to="item.link"
        :productTitle="item.title"
        :productImage="item.image"
        :productLink="item.link"
        :productDescription="item.description"
      />
    <Product-Template
        v-for="item in templates" 
        :key="item.title" 
        :to="item.link"
        :productTitle="item.title"
        :productImage="item.image"
        :productLink="item.link"
        :productDescription="item.description"
      />
  </div>
</div>

<div class="addons">
  <h2 class="heading"> 
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V16M8 12H16M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="#1E1E1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Doplňky
  </h2>
  <div class="products">
    <Product-Template
        v-for="item in addons" 
        :key="item.title" 
        :to="item.link"
        :productTitle="item.title"
        :productImage="item.image"
        :productLink="item.link"
        :productDescription="item.description"
      />
  </div>
</div>

<script>
export default {
  data() {
    return {
      recents: [
        {
          title: 'Celestin', 
          link: '/celestin/', 
          image: 'https://ik.imagekit.io/alexborecky/shoptetak/Docs/template_g8iM1AplU0IZ.svg',
          description: 'Blank šablona obohacená o kvalitní UX a interaktivní prvky',
        },
      ],
      templates: [
        {
          title: 'Opal', 
          link: '/opal/', 
          image: 'https://ik.imagekit.io/alexborecky/shoptetak/Docs/template_g8iM1AplU0IZ.svg',
          description: 'Minimalistická Blank šablona zaměřující se na obsah',
        },
      ],
      addons: [
        {
          title: 'Premium Carousel', 
          link: '/premium-carousel', 
          image: 'https://ik.imagekit.io/alexborecky/shoptetak/Docs/addon_OYbF65vi2.svg',
          description: 'Interaktivní vylepšení všedního Shoptet Carouselu'
        },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.addons {
  margin-top: 40px;
}

.heading {
    display: flex;
    align-items: center;
    svg {
        margin-right: 8px;
    }
}

.products {
  display: flex;
  flex-wrap: wrap;
  margin: 16px -40px;
}

.products > * {
  flex: 0 0 264px;
  margin: 16px 40px;
  @media only screen and (max-width: 960px){
    flex: 0 0 160px;
  }
}

/* .templates {
  .products {
    .preview:last-child {
      pointer-events: none;
      opacity: .4;
    }
  }
} */

/* .no-badge {
  .test-badge {
    display: none;
  }
} */

</style>