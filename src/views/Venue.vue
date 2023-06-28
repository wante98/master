<template>
    <div class="container">
      <Row>{{ '\u00A0' }}</Row>
      <img class="zlogo" alt="zlogo" src="../assets/wayne_Rebecca_b.png">
      <h5 class="subtitle">AUGUST 6, 2023 • TAIPEI, TAIWAN</h5>
      <h1 class="title">VENUE</h1>
      <h4 class="cardtitle">交通資訊</h4>
      <h5 class="time">如何到達將捷金鬱金香酒店?</h5>
      <div class="container-fluid">
        <div class="row">
          <img class="mainprewedphoto" alt="traffic" src="../assets/traffic_front.png">
        </div>
        <div class="row">
          <img class="mainprewedphoto" alt="traffic" src="../assets/traffic_back.png">
      </div>
      </div>
      <!-- <div class="content" >
        <p><br></p>
        <p>接送機服務</p>
        <p>將捷金鬱金香酒店設有機場接駁服務，可依您的來訪人數提供專屬車輛接送（需收取費用及提前預約）。</p>
        <p><br></p>
        <p>桃園國際機場 → 園區</p>
        <p>全程48公里，車程約60分鐘。</p>
        <p>搭乘捷運機場線至台北車站，轉乘捷運淡水信義線至淡水站再轉乘公車紅26至滬尾砲台站下車或搭乘園區接駁車。</p>
        <p><br></p>
        <p>台北松山機場 → 園區</p>
        <p>全程23公里，車程約50分鐘。</p>
        <p>搭乘捷運文湖線至大安站，轉乘捷運淡水信義線至淡水站再轉乘公車紅26至滬尾砲台站下車或搭乘園區接駁車。</p>
        <p><br></p>
        <p>行車路線</p>
        <p>請導航至新北市淡水區中正路一段2號。</p>
        <p><br></p>
        <p>高鐵&amp;台鐵</p>
        <p>搭乘高鐵或台鐵至台北車站，轉乘捷運淡水信義線至淡水站，再轉乘公車紅26至滬尾砲台站下車或搭乘園區接駁車。</p>
        <p><br></p>
        <p>捷運資訊</p>
        <p>捷運淡水信義線至淡水站再轉乘公車紅26至滬尾砲台站下車或搭乘園區接駁車。</p>
        <p><br></p>
        <p>公車路線</p>
        <p>從捷運淡水站2號出口右轉，搭乘紅26、836、870、872、873、藍海2、F112至滬尾砲台站下車。</p>
        <p>或過馬路對面台灣中油加油站搭乘757、837、857、880、883至滬尾砲台站下車。</p>
        <p><br></p>
        <p>公共自行車</p>
        <p>於捷運淡水站及園區皆有Youbike公共自行車、新北共享電動單車Moovo借還站，可沿淡水河畔往返。</p>
        <p><br></p>
        <p>停車資訊</p>
        <p>附設地下汽車停車場及平面機車停車場。</p>
        <p><br></p>
        <p>接駁資訊</p>
        <p>捷運淡水站2號出口，計程車排班處最前方搭乘接駁車，採預約制(11:00~18:30服務)。</p>
      </div> -->
      
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
    .content {
      max-width: 60%;
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
    .container {
      max-width: 80%;
      margin: 0 auto;
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

  .container {
      max-width: 80%;
      margin: 0 auto;
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
.content{
  padding: 0;
    margin: auto;
    max-width: 550px;
    text-align: left;
    font-family: Overpass;
    letter-spacing: 1px;
    color: #414042;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75;
    margin: 32px 0;
    font-family: Overpass;
    letter-spacing: 1px;
    color: #414042;
    font-size: 16px;
    font-weight: 400;
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