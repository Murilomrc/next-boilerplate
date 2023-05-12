import {
    Container,
    Content,
    Footer,
    Header,
    Section,
    TemplateContainer,
} from '@/components/template/landpage'

export default function Landpage() {
    return (
        <TemplateContainer>
            <Header>Header</Header>

            <Container>
                <Content>
                    <Section as="main">
                        <Section.Title>Teste</Section.Title>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Deserunt numquam commodi voluptates voluptate.
                        Velit ut iure quia, repellat iste eos quis, cupiditate
                        quibusdam voluptatem reprehenderit sint adipisci esse
                        temporibus. Repellendus? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Deleniti repellendus velit
                        dolores est! Omnis ipsam ad, iste totam mollitia sunt
                        reprehenderit aspernatur ab aliquam suscipit nisi veniam
                        minima ea porro. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sit veniam velit fugiat ad maiores
                        maxime voluptate nostrum dicta repellat, reprehenderit
                        porro mollitia, labore odit optio totam omnis iusto
                        animi ullam.
                    </Section>
                    <Section>Seção 2</Section>
                </Content>
            </Container>

            <Footer>Footer</Footer>
        </TemplateContainer>
    )
}
