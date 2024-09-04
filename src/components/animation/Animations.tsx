import Animator from "./Animator";

import error from '../../assets/lottie/error.json'

export const ErrorAnimation = ()=> <Animator style={{width: 80}} loop={false} animationData={error} file={error} />
