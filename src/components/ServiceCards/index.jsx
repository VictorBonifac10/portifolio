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
          <i className="bi bi-palette"></i>
          <h4>Noções de Design</h4>
        </CardTitle>
        <p>Aplicação de fundamentos visuais que elevam a estética do projeto e garantem uma comunicação clara e atraente.</p>
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
          <i className="bi bi-easel2"></i>
          <h4>Gestão de Projetos</h4>
        </CardTitle>
        <p>Planejamento organizado e acompanhamento contínuo para entregar soluções dentro do prazo, com qualidade e clareza.</p>
      </Card>

      <Card>
        <CardTitle>
          <i className="ri-team-line"></i>
          <h4>Trabalho em Equipe</h4>
        </CardTitle>
        <p>Colaboração ativa com profissionais diversos, mantendo comunicação efetiva e foco em resultados consistentes.</p>
      </Card>
    </CardGrid>
  )
};
