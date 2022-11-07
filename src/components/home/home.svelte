<script lang="ts">
    import { Col, Container, Row } from "sveltestrap";
</script>

<div class="home-wrapper">
    <Container fluid>
        <Row>
            <Col style="padding: 0 !important;">
                <div class="home-landing-section">
                    <div class="home-landing-wrapper">
                        <div class="home-landing-title-wrapper">
                            <span class="home-landing-title">Pizzaria</span>
                        </div>
                        <div class="home-landing-desc">
                            <span>
                                This is random text about philips pizzeria it
                                will be changed once he comes up w something
                                about how the pizzas taste amd how awesome they
                                are they are so good that this is dummy text
                                about hwo delish the pizza is wowowowowow the
                                pizza is so good awesome.
                            </span>
                        </div>
                        <div class="home-landing-button-wrapper">
                            <button>Services</button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col style="padding: 0 !important;">
                <div class="home-service-section">
                    <div class="home-service-wrapper">
                        <div class="home-section-title-wrapper">
                            <span>Services</span>
                        </div>
                        <div class="home-section-content-wrapper">
                            <Row class="home-section-content">
                                <Col sm="4">
                                    <div class="home-section-content-block">
                                        <div class="content-block-img" />
                                    </div>
                                </Col>
                                <Col sm="4">
                                    <div class="home-section-content-block">
                                        <div class="content-block-img" />
                                    </div>
                                </Col>
                                <Col sm="4">
                                    <div class="home-section-content-block">
                                        <div class="content-block-img" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</div>

<style lang="scss">
    .home-wrapper {
        .container-fluid {
            .row {
                .col {
                    .home-landing-section {
                        padding-top: 8vw;
                        padding-bottom: 8vw;

                        background-image: linear-gradient(
                                127deg,
                                #000000 0%,
                                rgba(0, 0, 0, 0.13) 50%
                            ),
                            url(assets/pizza-home.jpeg);
                        background-position: center bottom 0px;
                        background-repeat: no-repeat;
                        background-size: cover;

                        .home-landing-wrapper {
                            max-width: 1080px;
                            margin: 0 auto;

                            .home-landing-title-wrapper {
                                font-family: var(--font-poiret);
                                font-weight: 700;
                                text-transform: uppercase;
                                font-size: 170px;
                                letter-spacing: 0.1em;
                                line-height: 1.1em;
                                color: var(--font-color-white);

                                transform: skewX(0deg) skewY(-10deg);
                                margin-bottom: 1em !important;
                            }

                            .home-landing-desc {
                                color: var(--font-color-white);

                                font-size: 18px;
                                max-width: 600px;
                                font-family: var(--pizza-font);
                            }

                            .home-landing-button-wrapper {
                                margin-top: 1em;

                                button {
                                    padding: 0.75em 2em;
                                    font-size: 18px;
                                    font-weight: 700;
                                    font-family: var(--pizza-font);
                                    color: var(--font-color-white);
                                    background: linear-gradient(
                                        to right,
                                        #c96023 0%,
                                        #c96023 100%
                                    );
                                    border-radius: 5px;
                                }
                                button:hover {
                                    background: linear-gradient(
                                        to right,
                                        #c4591c 100%,
                                        #c96023 0%
                                    );
                                }
                            }
                        }
                    }

                    .home-service-section {
                        padding-top: 8vw;
                        padding-bottom: 8vw;

                        background-image: linear-gradient(
                                127deg,
                                #000000 0%,
                                rgba(0, 0, 0, 0.13) 50%
                            ),
                            url(assets/home-service-background.jpeg);
                        background-position: center bottom 0px;
                        background-repeat: no-repeat;
                        background-size: cover;

                        .home-service-wrapper {
                            max-width: 1080px;
                            margin: 0 auto;

                            .home-section-title-wrapper {
                                padding: 2rem 0;

                                color: var(--font-color-white);
                                font-family: var(--pizza-font);
                                font-size: 2.25rem;
                                text-transform: uppercase;
                                font-weight: 700;
                                letter-spacing: 6px;
                            }

                            .home-section-content {
                                .home-section-content-block {
                                    border-radius: 5px;

                                    .content-block-img {
                                        background-image: linear-gradient(
                                                127deg,
                                                #000000 0%,
                                                rgba(0, 0, 0, 0.13) 50%
                                            ),
                                            url(assets/home-services-catering.jpeg);
                                        background-position: center bottom 0px;
                                        background-repeat: no-repeat;
                                        background-size: cover;

                                        height: 400px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
