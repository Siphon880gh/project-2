// console warning that this is a prototype
document.addEventListener('DOMContentLoaded', () => {
    console.info("Prototype: Not meant for production. This is code done before refactoring into a full stack app. View source at index.php to see comments at top for more details on how the prototype works");
});

// fade out prototype visual cue
$(() => {
    setTimeout(() => {
        $(".prototype-php-engine").fadeOut(3000);
    }, 2000);
});

// Setup req and res
window.req = {}
window.req.body = {};
window.req.session = {};
window.req.session.user = {
    userId: null,
    username: null
}
window.res = {};
window.res.render = (querySelector, data, helpersArr, partialsArr) => {
    // Hide all other views
    $("[data-view]").addClass("d-none");

    // Register helpers
    // Render view at id=querySelector
    const hbs = Handlebars.create();
    if (helpersArr)
        helpersArr.forEach(helper => {
            hbs.registerHelper(helper.name, helper.fxn);
        });
    var template = $(querySelector + " template").clone().html().trim();
    var pTemplate = hbs.compile(template);
    var html = pTemplate(data);
    $(querySelector + " article").html(html);

    // Unhide view with id=querySelector
    $(querySelector).removeClass("d-none");
}

/**
 * 
 * Prototype hooks to links
 * 
 * On frontend, we fake routes by taking over the default behavior of clicking a link
 * and then using Hasher to change the URL pathname without refreshing the page.
 * Crossroads JS' routing system picks up the URL pathname onchange then changes
 * the layout dynamically based on the URL pathname.
 * 
 */
function prototypeHooksLink(event) {
    event.preventDefault();
    var that = event.target;
    var link = that.getAttribute('href');
    hasher.setHash(link);
}

/**
 * 
 * ZangoDB does not do joins aka $lookup like MongoDB does
 * Here's an implementation that will. You must exclude or rename fields
 * afterwards
 */
async function include(lookupValue, otherColumn, otherTable) {

    // Get include row
    var appendDoc = await users.findOne({
        "_id": lookupValue,
    });
    console.log({ appendDoc })

    return appendDoc;
}

/**
 * Setup browser JS and node JS interoperability
 */

// Crossroads JS and router will be interchangeable
window.router = crossroads;

// Node JS uses global, browser uses window
var global = window;