import { Parallax } from 'react-scroll-parallax';



const Component = () => {
    return (
        <div>

            <Parallax speed={5} translateX={['-850px', '900px']} >
                <img src="../ceu.jpg" style={{ height: '1000px', zIndex: '1 !important' }} />
            </Parallax>
            <Parallax speed={5} translateX={['850px', '-910px']} >
                <img src="../ceu.jpg" style={{ height: '1000px' }} />
            </Parallax>
            <Parallax translateX={['150px', '800px']}>
                <div className="my-thing" style={{ width: '150px', height: '150px', backgroundColor: 'red', marginTop: '-110px' }} />
            </Parallax>
            <Parallax translateX={['2100px', '-800px']}>
                <div className="my-thing" style={{ width: '150px', height: '150px', backgroundColor: 'blue', marginTop: '-110px' }} />
            </Parallax>
            <Parallax translateX={['150px', '1200px']}>
                <div className="my-thing" style={{ width: '150px', height: '150px', backgroundColor: 'yellow', marginTop: '-110px' }} />
            </Parallax>
            <Parallax translateX={['2100px', '-800px']}>
                <div className="my-thing" style={{ width: '150px', height: '150px', backgroundColor: 'green', marginTop: '-110px' }} />
            </Parallax>
        </div>
    );
}

export default Component;

