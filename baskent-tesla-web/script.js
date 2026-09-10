/* Spor & Tesla Konseptli Derin Arka Plan */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* İnce Siber Izgara Deseni */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: -2;
  pointer-events: none;
}

body::after {
  content: '';
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  /* Odak Noktası Kırmızı Enerji Işığı */
  background: radial-gradient(circle, rgba(255, 26, 26, 0.15) 0%, rgba(12, 12, 15, 0) 70%);
  z-index: -1;
  pointer-events: none;
  animation: pulseGlow 8s infinite alternate ease-in-out;
}

@keyframes pulseGlow {
  0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.9); }
  100% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.2); }
}