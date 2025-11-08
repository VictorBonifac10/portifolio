import { CardGrid, Card, CardTitle } from './styles'

export function ServicesCards() {
  return (
    <CardGrid>
      <Card>
        <CardTitle>
          <i className="ri-brush-line"></i>
          <h4>Identidade Visual</h4>
        </CardTitle>
        <p>Criação de identidade visual única e profissional que destaca sua marca e fortalece sua presença digital.</p>
      </Card>

      <Card>
        <CardTitle>
          <i class="ri-seo-line"></i>
          <h4>SEO de Buscas</h4>
        </CardTitle>
        <p>Otimização completa para buscadores, aumentando a visibilidade do seu site e atraindo mais clientes de forma orgânica.</p>
      </Card>

      <Card>
        <CardTitle>
          <i class="ri-flashlight-line"></i>
          <h4>Performance</h4>
        </CardTitle>
        <p>Sites rápidos, estáveis e protegidos, com alta performance e segurança para garantir o melhor para seu cliente.</p>
      </Card>

      <Card>
        <CardTitle>
          <i class="ri-macbook-line"></i>
          <h4>Experiência do usuário</h4>
        </CardTitle>
        <p>Projetamos interfaces intuitivas e envolventes que proporcionam uma navegação fluida e agradável ao visitante.</p>
      </Card>

      <Card>
        <CardTitle>
          <i class="ri-hammer-line"></i>
          <h4>Suporte e manutenção</h4>
        </CardTitle>
        <p>Oferecemos suporte contínuo e manutenção para manter seu site sempre atualizado, seguro e em pleno funcionamento.</p>
      </Card>

      <Card>
        <CardTitle>
          <i class="ri-code-ai-line"></i>
          <h4>Tecnologia moderna</h4>
        </CardTitle>
        <p>Utilizamos as tecnologias mais atuais do mercado para desenvolver sites modernos, rápidos e eficientes.</p>
      </Card>
    </CardGrid>
  )
}
