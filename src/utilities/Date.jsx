export default function Today() {

    const event = new Date()
    const day = event.toLocaleString("en-us", {
        weekday: "long"
    })
    const date = event.getDate()
    const month = event.toLocaleString("en-us", {
        month: "long"
    })
    const year = event.getFullYear()

    let today = `${day}, ${date} ${month} ${year}`
    console.log(today)
    return today
}