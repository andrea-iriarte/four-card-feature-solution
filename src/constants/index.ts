export type card = {
    title: string,
    subtitle: string,
    icon: string,
    color: string
}

export const cardData: Array<card> = [
    {
        title: 'Supervisor',
        subtitle: 'Monitors activity to identify project roadblocks',
        icon: 'icon-supervisor.svg',
        color: '#45d3d3'
    },
    {
        title: 'Team Builder',
        subtitle: 'Scans our talent network to create the optimal team for your project',
        icon: 'icon-team-builder.svg',
        color: 'hsl(0, 78%, 62%)'
    },
    {
        title: 'Karma',
        subtitle: 'Regularly evaluates our talent to ensure quality',
        icon: 'icon-karma.svg',
        color: 'hsl(34, 97%, 64%)'
    },
    {
        title: 'Calculator',
        subtitle: 'Uses data from past projects to provide better delivery estimates',
        icon: 'icon-calculator.svg',
        color: 'hsl(212, 86%, 64%)'
    }
]