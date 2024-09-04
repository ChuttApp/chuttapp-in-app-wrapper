import Lottie, { LottieComponentProps } from "lottie-react";

interface Props extends LottieComponentProps {
    file?: any;
    loop?: boolean;
}
const Animator = ({file: animationFile, loop, ...props}: Props) => {
  return <Lottie {...props} loop={loop} animationData={animationFile} />;
};

export default Animator;