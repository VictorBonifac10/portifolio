import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Grid, ImageWrapper, Image } from "./styles";

import { creatives } from "../../data/creatives";

export function Creatives() {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <Grid>
                {creatives.map((img, i) => (
                    <ImageWrapper key={i} onClick={() => setIndex(i)}>
                        <Image src={img.src} alt={`Criativo ${i + 1}`} />
                    </ImageWrapper>
                ))}
            </Grid>

            <Lightbox
                slides={creatives}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
        </>
    );
}