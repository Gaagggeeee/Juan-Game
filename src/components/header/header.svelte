<script lang="ts">
  import { Col, Container, Row } from "sveltestrap";

  let isHamburgerOpen: boolean = false;

  function handleHamburgerOpen() {
    isHamburgerOpen = !isHamburgerOpen;
  }
</script>

<!-- HTML GOES HERE -->
<div class="header-wrapper {isHamburgerOpen ? 'open' : ''}">
  <Container fluid>
    <Row>
      <Col>
        <div class="header-contents-wrapper">
          <div class="header-logo-wrapper">
            <span>SaborditaliaPzzeria</span>
          </div>
          <div class="header-links-wrapper">
            <div id="top-head-inner">
              <div
                class="nav-button-wrapper"
                on:click={handleHamburgerOpen}
                on:keydown={handleHamburgerOpen}
              >
                <svg
                  class="ham hamRotate ham1 {isHamburgerOpen ? 'active' : ''} "
                  viewBox="0 0 100 100"
                  width="80"
                >
                  <path
                    class="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                  />
                  <path class="line middle" d="m 30,50 h 40" />
                  <path
                    class="line bottom"
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                  />
                </svg>
              </div>
              <nav id="global-nav" class={isHamburgerOpen ? "open" : ""}>
                <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">PRODUCT</a></li>
                  <li><a href="#">WORKS</a></li>
                  <li><a href="#">COMPANY</a></li>
                  <li><a href="#">CONTACT</a></li>
                </ul>
              </nav>
              <div id="nav-bg" class={isHamburgerOpen ? "open" : ""} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>

<style lang="scss">
  .header-wrapper {
    font-family: var(--pizza-font);
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.8em;

    margin: 0 auto;

    background: transparent;
    width: 100%;

    padding: 0.5rem 0;

    > div {
      .header-contents-wrapper {
        display: flex;
        align-items: center;
      }

      .header-logo-wrapper {
        color: #ffffff;
        font-size: var(--header-link-font-size);
      }

      .header-links-wrapper {
        float: right;
        width: 100%;
      }

      .nav-button-wrapper {
        float: right;
      }

      .ham {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .hamRotate.active {
        transform: rotate(45deg);
      }

      .hamRotate180.active {
        transform: rotate(180deg);
      }

      .line {
        fill: none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke: #fff;
        stroke-width: 3;
        stroke-linecap: round;
      }

      .ham1 .top {
        stroke-dasharray: 40 139;
      }
      .ham1 .bottom {
        stroke-dasharray: 40 180;
      }
      .ham1.active .top {
        stroke-dashoffset: -98px;
      }
      .ham1.active .bottom {
        stroke-dashoffset: -138px;
      }
    }
  }

  /* ***********************************************************
* #global-nav
* *********************************************************** */
  .open #global-nav {
    z-index: 100;
    visibility: visible;
  }
  #global-nav {
    visibility: hidden;
    position: fixed;
    display: table;
    vertical-align: middle;
    color: #fff;
    top: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
  #global-nav ul {
    display: table-cell;
    vertical-align: middle;
    list-style: none;
    padding: 30px;
  }
  #global-nav a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 10px 0;
  }

  /* ***********************************************************
* nav-list
* *********************************************************** */
  #global-nav ul li {
    opacity: 0;
    -webkit-transform: scaleX(0) translateX(-260px);
    transform: scaleX(0) translateX(-260px);
    -webkit-transition: none;
    transition: none;
  }
  .open #global-nav ul li {
    opacity: 1;
    -webkit-transform: scaleX(1) translateX(0);
    transform: scaleX(1) translateX(0);

    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;

    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }
  .open #global-nav ul li:nth-child(2) {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  .open #global-nav ul li:nth-child(3) {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  .open #global-nav ul li:nth-child(4) {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }
  .open #global-nav ul li:nth-child(5) {
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }

  /* ***********************************************************
* #nav-bg
* *********************************************************** */
  #nav-bg {
    content: "";
    width: 60px;
    height: 60px;
    top: 10px;
    float: right;
    display: block;
    position: relative;
    background: #d8dce2;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .open #nav-bg {
    -webkit-transform: scale(10);
    transform: scale(10);
    -webkit-transition: all 0.6s ease-out;
    transition: all 0.6s ease-out;
  }

  /* ***********************************************************
* #nav-toggle
* *********************************************************** */
  #nav-toggle {
    display: block;
    position: fixed;
    left: calc((100% - 60px) / 2);
    bottom: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    padding: 15px;
    z-index: 1001;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  #nav-toggle div {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  #nav-toggle span {
    /*   display: block; */
    height: 2px;
    width: 100%;
    background: #fff;
    /*   left: 0; */
    zoom: 1;
    -webkit-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;

    margin: 4px 0;
  }

  #nav-toggle span:nth-child(1) {
    top: 0;
  }
  #nav-toggle span:nth-child(2) {
    top: 8px;
  }
  #nav-toggle span:nth-child(3) {
    top: 16px;
  }

  .open #nav-toggle {
    background: transparent;
  }

  .open #nav-toggle span {
    background: #fff;
  }

  .open #nav-toggle span:nth-child(1) {
    top: 9px;
    -webkit-transform: translateY(10px) rotate(-135deg);
    transform: translateY(10px) rotate(-135deg);
    zoom: 1;
  }
  .open #nav-toggle span:nth-child(2) {
    width: 0;
    left: 50%;
  }
  .open #nav-toggle span:nth-child(3) {
    top: 9px;
    -webkit-transform: translateY(-10px) rotate(135deg);
    transform: translateY(-10px) rotate(135deg);
    zoom: 1;
  }
</style>
