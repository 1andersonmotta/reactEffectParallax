import { ParallaxBanner } from "react-scroll-parallax";
import './AdvancedBannerTop.css'

export const AdvancedBannerTop = () => {
    const background = {
        image:
            "../ceu.jpg",
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const headline = {
        translateY: [-10, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="inset center">
                <h1 className="headline white">Por Favor!</h1>
            </div>
        )
    };

    const foreground = {
        image:
            "../montanhas.png",
        translateY: [0, 15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const gradientOverlay = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxBanner
            layers={[background, headline, foreground, gradientOverlay]}
            className="full"
        />
    );
};

export default AdvancedBannerTop
