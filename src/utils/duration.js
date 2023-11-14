export const mathDuration = (duration) => {
    const toMinutes = duration / 60
    const minutes = Math.round(toMinutes % 60);
    const hours = Math.floor(toMinutes / 60);
    return hours >= 1 ? `${hours}h ${minutes}m` : `${minutes}m`;

}