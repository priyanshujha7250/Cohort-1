// five main events of drag and drop
// dragstart
// dragover
// dragenter
// dragLeave
// drop

const items = document.querySelectorAll(".item")
const containers = document.querySelectorAll(".container")

items.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id)
        setTimeout(() => item.classList.add("dragging"), 0)
    })
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    })
})

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault()
        container.classList.add("hover")
    })

    container.addEventListener("dragenter", (e) => {
        e.preventDefault()
    })

    container.addEventListener("dragleave", () => {
        container.classList.remove("hover")
    })

    container.addEventListener("drop", (e) => {
        e.preventDefault()
        const id = e.dataTransfer.getData("text/plain")
        const item = document.getElementById(id)
        if (item) {
            container.appendChild(item)
        }
        container.classList.remove("hover")
    })
})
