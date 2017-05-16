function getView() {

    var str = $(`<!DOCTYPE html>
<html>
<head>
    
    <style>html { font-size: 14px; font-family: Arial, Helvetica, sans-serif; }</style>
    <title></title>



</head>
<body>
<div id="example">
    <div class="demo-section k-content wide">
        <div>
            <div data-role="listview"
                 data-template="template"
                 data-bind="source: products,
                            visible: isVisible,
                            events: {
                              save: onSave
                            }"
                
        </div>

    </div>
    <script type="text/x-kendo-tmpl" id="template">
        <div class="product-view k-widget">
            <dl>
                <dt>Id</dt>
                <dd>#:carId#</dd>
                <dt>Марка</dt>
                <dd>#:mark#</dd>
                <dt>Модель</dt>
                <dd>#:model#</dd>
                <dt>Год</dt>
                <dd>#:year#</dd>
                <dt>Просмотры</dt>
                <dd>#:watch#</dd>
                <dt>Объём двигателя</dt>
                <dd>#:amount#</dd>
                <dt>Пробег</dt>
                <dd>#:mileage#</dd>
                <dt>Цена</dt>
                <dd>#:cost#</dd>
                <dt>Состояние</dt>
                <dd>#:state#</dd>
                <dt>Тип двигателя</dt>
                <dd>#:type#</dd>
                <dt>Трансмиссия</dt>
                <dd>#:transmission#</dd>
                <dt>Фото</dt>
                <dd><img width='100px' src='#: photoUrl #'></img></dd>
            </dl>
        </div>
    </script>

    








<script>
    var viewModel = kendo.observable({
        isVisible: true,
        products: new kendo.data.DataSource({
            schema: {
                model: {
                    carId: "carId",
                    year:"year",
                    watch:"watch",
                    amount:"amount",
                    mileage:"mileage",
                    mark:"mark",
                    model:"model",
                    cost:"cost",
                    state:"state",
                    type:"type",
                    transmission:"transmission",
                    photoUrl:"photoUrl"
                    
                }
            },
            batch: true,
            transport: {
                read: {
                    url: "/Car/Get25"
                }
            }
        })
    });
    kendo.bind($("#example"), viewModel);
</script>

</div>

<style>
    .product-view
    {
        float: left;
        width: 20%;
        height: 800px;
        box-sizing: border-box;
        border-top: 0;
        position: relative;
    }
    .product-view:nth-child(even) {
        border - left - width: 0;
    }
    .product-view dl
    {
        margin: 10px 10px 0;
        padding: 0;
        overflow: hidden;
    }
    .product-view dt, dd
    {
        margin: 0;
        padding: 0;
        width: 100%;
        line-height: 24px;
        font-size: 18px;
    }
    .product-view dt
    {
        font - size: 11px;
        height: 16px;
        line-height: 16px;
        text-transform: uppercase;
        opacity: 0.5;
    }

    .product-view dd
    {
        height: 46px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

    }

    .product-view dd .k-widget,
    .product-view dd .k-textbox {
        font - size: 14px;
    }
    .k-listview
    {
        border - width: 1px 1px 1px 0;
        padding: 0;
        overflow: hidden;
        min-height: 298px;
    }
    .edit-buttons
    {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: right;
        padding: 5px;
        background-color: rgba(0,0,0,0.1);
    }
    span.k-invalid-msg
    {
        position: absolute;
        margin-left: 6px;
    }

    .k-add-button {
        margin - bottom: 2em;
    }

    @media only screen and (max-width : 620px) {
    
        .product - view
        {
    width: 100%;
        }
        .product-view:nth-child(even) {
        border - left - width: 1px;
        }
    }
</style>

</body>
</html>
`);


    return str;
}

//style = "height: 300px; overflow: auto" ></div >


//<style>
//    .product-view
//    {
//        float: left;
//        width: 50%;
//        height: 300px;
//        box-sizing: border-box;
//        border-top: 0;
//        position: relative;
//    }
//    .product-view:nth-child(even) {
//        border - left - width: 0;
//    }
//    .product-view dl
//    {
//        margin: 10px 10px 0;
//        padding: 0;
//        overflow: hidden;
//    }
//    .product-view dt, dd
//    {
//        margin: 0;
//        padding: 0;
//        width: 100%;
//        line-height: 24px;
//        font-size: 18px;
//    }
//    .product-view dt
//    {
//        font - size: 11px;
//        height: 16px;
//        line-height: 16px;
//        text-transform: uppercase;
//        opacity: 0.5;
//    }

//    .product-view dd
//    {
//        height: 46px;
//        overflow: hidden;
//        white-space: nowrap;
//        text-overflow: ellipsis;

//    }

//    .product-view dd .k-widget,
//    .product-view dd .k-textbox {
//        font - size: 14px;
//    }
//    .k-listview
//    {
//        border - width: 1px 1px 1px 0;
//        padding: 0;
//        overflow: hidden;
//        min-height: 298px;
//    }
//    .edit-buttons
//    {
//        position: absolute;
//        bottom: 0;
//        left: 0;
//        right: 0;
//        text-align: right;
//        padding: 5px;
//        background-color: rgba(0,0,0,0.1);
//    }
//    span.k-invalid-msg
//    {
//        position: absolute;
//        margin-left: 6px;
//    }

//    .k-add-button {
//        margin - bottom: 2em;
//    }

//    @media only screen and (max-width : 620px) {
    
//        .product - view
//        {
//    width: 100%;
//        }
//        .product-view:nth-child(even) {
//        border - left - width: 1px;
//        }
//    }
//</style>