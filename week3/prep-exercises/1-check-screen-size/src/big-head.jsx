import { BeanHead } from 'beanheads'

const AHMET = {
    body: "chest",
    eyebrows: "angry",
    eyes: "content",
    faceMask: false,
    facialHair: "stubble",
    hair: "buzz",
    hairColor: "black",
    lashes: false,
    lipColor: "purple",
    mask: false,
    mouth: "openSmile",
    skinTone: "light",
}

const MELIKE = {
    body: "breasts",
    eyebrows: "serious",
    eyes: "simple",
    faceMask: false,
    facialHair: "none",
    hair: "long",
    hairColor: "black",
    lashes: false,
    lipColor: "purple",
    mask: false,
    mouth: "serious",
    skinTone: "brown",
}

const HASAN= {
    body: "breasts",
    eyebrows: "leftLowered",
    eyes: "leftTwitch",
    faceMask: false,
    faceMaskColor: "black",
    facialHair: "none",
    hair: "afro",
    hairColor: "blue",
    lashes: true,
    lipColor: "green",
    mask: false,
    mouth: "lips",
    skinTone: "light",
}

const RandomHead = ({ person }) => (
    <div style={{ width: "145px", display: "auto" }}>
        <BeanHead {...person} />
    </div>
)

export { RandomHead, AHMET, MELIKE, HASAN }