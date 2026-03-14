'use client'

import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function ParticlesBackground() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    if (!init) return null

    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: { value: "transparent" },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                    },
                    modes: {
                        grab: { distance: 140, links: { opacity: 0.5 } },
                    },
                },
                particles: {
                    color: { value: "#10b981" },
                    links: {
                        color: "#10b981",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: { default: "out" },
                    },
                    number: { value: 80, density: { enable: true } },
                    opacity: { value: 0.3 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    )
}