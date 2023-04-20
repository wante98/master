<template>
    <div class="container">
      <Row>{{ '\u00A0' }}</Row>
      <img class="zlogo" alt="zlogo" src="../assets/wayne_Rebecca_b.png">
      <h1 class="title">Photos</h1>
      <h5 class="subtitle">AUGUST 6, 2023 • TAIPEI, TAIWAN</h5>
      <Row>{{ '\u00A0' }}</Row>
      <div class="row">
        <div class="col-md-4 col-sm-6 col-12" v-for="i in 9">
          <a href="#" @click="showModal(i)">
            <img :src="require(`../assets/preweddingphotos/${i}.jpg`)" class="img-fluid">
          </a>
        </div>
      </div>
      <!-- Modal -->
      
      <Modal v-model="modal" class="modal fade" ref="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <img :src="require(`../assets/preweddingphotos/1.jpg`)" class="img-fluid">
            </div>
          </div>
        </div>
      </Modal>
      <Row>{{ '\u00A0' }}</Row>
        <img class="clogo" alt="clogo" src="../assets/materials/尤李臻好黑字.png">    
    <Row>{{ '\u00A0' }}</Row>
    <h5 class="subtitle">2023/8/6</h5>
    <h5 class="bottomtext"> Made by Wayne Yu</h5>
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedPhoto: null,
        modal: false
      };
    },
    methods: {
      showModal(photoId) {
        this.selectedPhoto = photoId;
        this.$refs.modal.classList.add('show');
      },
    },
  };
  </script>
  
  <style>
  /* desktop */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .col-md-4 {
      flex-basis: calc(33.333% - 1rem);
      margin-bottom: 2rem;
    }

    .img-fluid {
    max-width: 100%;
    height: auto;
  }
  }
  
  /* tablet */
  @media (min-width: 768px) and (max-width: 991px) {
    .col-sm-6 {
      flex-basis: calc(50% - 1rem);
      margin-bottom: 2rem;
    }

    .img-fluid {
    max-width: 100%;
    height: auto;
  }
  }
  
  /* smartphone */
  @media (max-width: 767px) {
    .col-12 {
      flex-basis: 75%;
      margin-bottom: 2rem;
    }

    .img-fluid {
    max-width: 75%;
    height: auto;
  }
  }
  
  .title {
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1;
    margin: 16px 0;
    font-family: Overpass;
    color: #414042;
    font-size: 52px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 8px;
  }

  .subtitle {
    line-height: 1;
    margin: 8px 0;
    font-family: Overpass;
    letter-spacing: 2px;
    color: #414042;
    font-size: 20px;
    font-weight: normal;
    text-transform: uppercase;
  }

  
  /* Modal styles */
  .modal {
    display: none; /* hide the modal by default */
  }
  .modal.show {
    display: block; /* show the modal when it's opened */
    background-color: rgba(0, 0, 0, 0.5); /* add a semi-transparent background */
  }
  .modal-dialog {
    margin: 10% auto; /* vertically center the modal */
  }
  .modal-lg {
    max-width: 800px;
  }
  .modal-body {
    text-align: center;
  }

.zlogo {
  max-width: 40%;
  height: auto;
}

.clogo {
  max-width: 40%;
  height: auto;
  border-bottom: 1px solid #414042;
  color: #414042;

}

.bottomtext {
    line-height: 1.75;
    font-family: Overpass;
    letter-spacing: 0px;
    color: #414042;
    font-size: 14px;
    font-weight: 300;
    margin: 12px 0;
    text-align: center;
}
  </style>