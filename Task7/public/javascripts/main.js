page.base('/');
page('/', admin);
page('admin', admin);
page('admin/create', adminCreate);
page('*', def);
page();
function admin() {
    var container = $('#content');
    //$.get('/getGrid', function (data) {
    //    $('#content').html(data);
    //});
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




