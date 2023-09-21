import { Parallax } from 'react-scroll-parallax';



const Cat = () => {
    return (
        <Parallax
            sticky={{ start: 0.3, end: 5.9 }}
            translateY={['-38000px', '28200px']}
        >
            <img style={{ zIndex: '2 !important' }} src="../cat.gif" />
        </Parallax>
    )
}

export default Cat;