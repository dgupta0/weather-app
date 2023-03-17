export default function Today() {
    const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = event.toLocaleDateString(undefined, options)

    return today
}