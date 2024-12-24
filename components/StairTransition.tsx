"use client";

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

usePathname

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="">stairs

        </div>
      </div>
    </AnimatePresence>
    </>
  )
}

export default StairTransition