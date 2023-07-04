const results = $("#results")
const source = $('#apt-template').html()
const template = Handlebars.compile(source)

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let park = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, park)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    let html = template({ apts: apartments})
    results.append(html)
}

renderApts(apartments) //renders apartments when page loads