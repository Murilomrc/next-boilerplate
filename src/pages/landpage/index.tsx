import {
    TemplateContainer,
    Header,
    Footer,
    Container,
    Content,
    Section,
} from '@/components/template/landpage'

export default function Landpage() {
    return (
        <TemplateContainer>
            <Header>Header</Header>

            <Container>
                <Content>
                    <Section as="main">
                        <Section.Title>Teste</Section.Title>
                        Seção 1
                    </Section>
                    <Section>Seção 2</Section>
                </Content>
            </Container>

            <Footer>Footer</Footer>
        </TemplateContainer>
    )
}
