<template>
    <div class="container">
      <Row>{{ '\u00A0' }}</Row>
      <img class="zlogo" alt="zlogo" src="../assets/wayne_Rebecca_b.png">
      <h1 class="title">WAYNE & REBECCA</h1>
      <h5 class="subtitle">AUGUST 6, 2023 • TAIPEI, TAIWAN</h5>
      <Row>{{ '\u00A0' }}</Row>
      <div class="row">
        <img class="mainprewedphoto" alt="mainprewedphoto" src="../assets/logo.png">
      </div>
      <!-- Content -->
      <h4 class="cardtitle">婚禮資訊</h4>
      <h5 class="time">10:00~14:00</h5>
      <h5 class="venue">淡水將捷金鬱金香酒店</h5>
      <h5 class="address">新北市淡水區中正路一段2-1號貝殼廳</h5>
      <Row>{{ '\u00A0' }}</Row>
        <img class="clogo" alt="clogo" src="../assets/materials/尤李臻好黑字.png">  
        <font-awesome-icon icon="instagram" />
  
    <Row>{{ '\u00A0' }}</Row>
    <h5 class="subtitle">2023/8/6</h5>
    <font-awesome-icon icon="fa-solid fa-user-secret" />

    <h5 class="bottomtext"> Made by Wayne Yu</h5>
    <!-- <div class="social">
      <span class="spanSpace">
        <p>sss</p>
        <a href="www.twitter.com"><font-awesome-icon :icon="['fab', 'line']" /></a>
      </span>
      <span class="spanSpace">
        <a href="www.facebook.com"><i class="fab btn-outline-dark fa-facebook-f "></i></a>
      </span>
      <span class="spanSpace">
        <a href="www.instagram.com"><i class="fab btn-outline-dark fa-instagram "></i></a>
      </span>
      <span class="spanSpace">
        <a href="mailto:mail@email.com"><i class="fas btn-outline-dark fa-envelope "></i></a>
      </span>
    </div> -->
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
    font-size: 32px;
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
.cardtitle{
    line-height: 1;
    margin: 32px 0px 8px;
    font-family: Overpass;
    color: rgb(65, 64, 66);
    font-size: 32px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 4px;
}
.time {
    margin: 8px 0px;
    font-family: Overpass;
    letter-spacing: 2px;
    color: rgb(65, 64, 66);
    font-size: 20px;
    font-weight: normal;
    text-transform: uppercase;
}  
.venue {
    margin: 4px 0px;
    font-family: Overpass;
    letter-spacing: 1px;
    color: rgb(65, 64, 66);
    font-size: 16px;
    font-weight: 400;
}
.address {
    margin: 4px 0px;
    font-family: Overpass;
    letter-spacing: 1px;
    color: rgb(65, 64, 66);
    font-size: 16px;
    font-weight: 400;
}
.mainprewedphoto{
    max-width: 100%;
    height: auto;
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