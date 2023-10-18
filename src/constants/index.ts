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
        color: 'primary-cyan'
    },
    {
        title: 'Team Builder',
        subtitle: 'Scans our talent network to create the optimal team for your project',
        icon: 'icon-team-builder.svg',
        color: 'primary-red'
    },
    {
        title: 'Karma',
        subtitle: 'Regularly evaluates our talent to ensure quality',
        icon: 'icon-karma.svg',
        color: 'primary-orange'
    },
    {
        title: 'Calculator',
        subtitle: 'Uses data from past projects to provide better delivery estimates',
        icon: 'icon-calculator.svg',
        color: 'primary-blue'
    }
]