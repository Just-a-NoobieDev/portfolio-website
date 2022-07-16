import { keyframes } from "styled-components";

export const Float = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const bounce = keyframes` {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}`;

export const typing = keyframes` {
  from { width: 0 }
  to { width: 100% }
}`;

export const blink = keyframes`  {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}`;
