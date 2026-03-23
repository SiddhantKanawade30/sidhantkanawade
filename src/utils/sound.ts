export const playClickSound = () => {
        const audio = new Audio('/click.mp3')
        audio.volume = 0.3
        audio.play().catch(() => {
            // Handle autoplay restrictions
        })
    }