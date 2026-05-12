//Tags from Styles
import { CardGrid, Card, CardTitle } from './styles'

export function ServiceCards() {
  return (
    <CardGrid>
      <Card>
        <CardTitle>
          <i className="bi bi-laptop"></i>
          <h4>Desenvolvimento Web</h4>
        </CardTitle>
        <p>Criação de aplicações modernas, responsivas e escaláveis, focadas em desempenho e experiência real do usuário.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="bi bi-code-slash"></i>
          <h4>Engenharia de Software</h4>
        </CardTitle>
        <p>Organização estrutural do código com foco em qualidade, padrões sólidos e soluções eficientes para cada demanda.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="bi bi-cpu"></i>
          <h4>Desenvolvimento e consumo de API</h4>
        </CardTitle>
        <p>Integrações robustas entre sistemas, garantindo comunicação rápida, segura e confiável entre aplicações diversas.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="bi bi-megaphone"></i>
          <h4>Marketing e comunicação</h4>
        </CardTitle>
        <p>Planejamento e desenvolvimento de estratégias de comunicação digital voltadas ao fortalecimento da marca, engajamento do público e posicionamento nas mídias sociais.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="bi bi-easel2"></i>
          <h4>Gestão de<br></br>Projetos</h4>
        </CardTitle>
        <p>Planejamento organizado e acompanhamento contínuo para entregar soluções dentro do prazo, com qualidade e clareza.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="bi bi-palette"></i>
          <h4>Design<br></br>Gráfico</h4>
        </CardTitle>
        <p>Desenvolvimento de materiais visuais criativos para redes sociais, campanhas e projetos institucionais, unindo estética, clareza e impacto na comunicação.</p>
      </Card>
    </CardGrid>
  )
};
