<script lang="ts">
    import { Col, Container, Row, Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap";

    let open = false;
    function handleModalEvents(): any {
        open = !open
    }

    const toggle = () => (open = !open);

</script>

<div class="home-wrapper">
    <Container xl>
        <Row>
            <Col style="padding: 0 !important;">
                <div class="home-landing-section">
                    <div class="home-landing-wrapper">
                        
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

                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
