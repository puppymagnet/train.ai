export const navigationOptions: navOption[] = [
    {label: 'Featured Workouts', route: 'featured'},
    {label: 'Your Workouts', route:'your-workouts'},
    {label: 'Performance Inisghts', route:'insights'},
]

export type navOption = {
    label: string;
    route: string;
};