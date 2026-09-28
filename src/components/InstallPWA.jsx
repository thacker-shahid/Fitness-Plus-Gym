import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaTimes } from 'react-icons/fa'

// Shows a floating "Install App" button when the browser signals the site
// is installable (Chrome/Edge/Android). iOS Safari has no such event, so a
// short hint is shown there instead.
export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)
  const [iosHint, setIosHint] = useState(false)

  useEffect(() => {
    // Already installed / running standalone -> don't show anything.
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    if (standalone) return

    const dismissed = sessionStorage.getItem('pwa-install-dismissed')

    const onBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      if (!dismissed) setVisible(true)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall)

    const onInstalled = () => {
      setVisible(false)
      setDeferredPrompt(null)
    }
    window.addEventListener('appinstalled', onInstalled)

    // iOS Safari fallback hint.
    const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent)
    const isSafari =
      /safari/i.test(window.navigator.userAgent) &&
      !/crios|fxios|chrome/i.test(window.navigator.userAgent)
    if (isIos && isSafari && !dismissed) {
      setIosHint(true)
      setVisible(true)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const install = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setVisible(false)
  }

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('pwa-install-dismissed', '1')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-6 left-6 z-[70] max-w-xs"
        >
          <div className="card flex items-center gap-3 p-4 shadow-glow">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-white">
              <FaDownload />
            </span>
            <div className="flex-1">
              {iosHint ? (
                <p className="text-sm text-gray-200">
                  Install this app: tap{' '}
                  <span className="font-semibold text-accent-light">Share</span>{' '}
                  then{' '}
                  <span className="font-semibold text-accent-light">
                    Add to Home Screen
                  </span>
                  .
                </p>
              ) : (
                <>
                  <p className="text-sm font-semibold text-white">
                    Install Fitness Plus Gym
                  </p>
                  <p className="text-xs text-gray-400">
                    Add to your device for quick access.
                  </p>
                </>
              )}
            </div>
            {!iosHint && (
              <button onClick={install} className="btn-primary !px-4 !py-2 text-sm">
                Install
              </button>
            )}
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
