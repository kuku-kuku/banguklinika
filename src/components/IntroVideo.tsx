import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function IntroVideo() {
  const [visible, setVisible] = useState(true)

  const videoRef = useRef<HTMLVideoElement>(null)

  function dismiss() {
    document.documentElement.style.background = ''
    document.getElementById('intro-splash')?.remove()
    setVisible(false)
    window.dispatchEvent(new Event('bk-intro-done'))
  }

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = "hidden"
    if (videoRef.current) videoRef.current.playbackRate = 1.5
    return () => { document.body.style.overflow = "" }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999]"
          style={{ background: '#18413F' }}
        >
          <video
            ref={videoRef}
            src="/Bangu-klinika-logo-animacija.mp4"
            autoPlay
            muted
            playsInline
            onEnded={dismiss}
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
          />

        </motion.div>
      )}
    </AnimatePresence>
  )
}
