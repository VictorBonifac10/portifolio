//Tags from Styles
import { Button } from './styles'

//Datas
import { links } from '../../data/links'

export function SupportButton() {
    return (
        <>
            {links.map(data => (
                <Button key={data.whatsapp} href={data.whatsapp} target="_blank">
                    <i class="ri-wechat-line"></i>
                    <div>
                        <h2>Precisa de ajuda?</h2>
                        <p>Entre em contato comigo e vamos conversar.</p>
                    </div>
                    <i className="ri-arrow-right-s-fill"></i>
                </Button>
            ))}
        </>
    );
};