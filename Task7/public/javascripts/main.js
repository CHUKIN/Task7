page.base('/');
page('/', index);
page('admin', admin);
page('admin/create', adminCreate);
page('*', def);
page();
function admin() {
    var container = $('#content');
    container.empty();
    $(container).append(getGrid());
}
function adminCreate() {
    var container = document.querySelector('#content');
    container.innerHTML = "create";
}
function def() {
    var container = document.querySelector('#content');
    container.innerHTML = "default";
}

function index() {
    var container = $('#content');
    container.empty();
    $(container).append(getView());
}




