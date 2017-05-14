function getGrid() {
    var div = $('<div id="grid"></div>');
    $(div).kendoGrid({
        sortable: true,
        filterable: {
            mode: "row"
        },
        resizable: true,
        reorderable: true,
        editable: "inline",
        columnMenu: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5,
            pageSize: 10
        },
        dataSource:{
            type: "json",
            transport: {
                read: "/Car/Get",
                update: {
                    url: "/Car/Update",
                    dataType: "json",
                    type:"POST"
                },
                destroy: {
                    url: "/Car/Delete",
                    dataType: "json",
                    type: "POST"
                },
                create: {
                    url:"/Car/Create",
                    dataType: "json",
                    ype: "POST"
                },
                batch: true,
            },
            schema: {
                model: {
                    fields: {
                        carId: { type: "number",editable:false },
                        year: { type: "number",validation: { required: true} },
                        watch: { type: "number" ,validation: { required: true}},
                        amount: { type: "number" ,validation: { required: true}},
                        mileage: { type: "number" ,validation: { required: true}},
                        mark:{type:"string",validation: { required: true}},
                        model:{type:"string",validation: { required: true}},
                        cost:{type:"number",validation: { required: true}},
                        state:{type:"string",validation: { required: true}},
                        type:{type:"string",validation: { required: true}},
                        transmission:{type:"string",validation: { required: true}},
                        photoUrl:{type:"string",validation: { required: true}},

                    }
                }
            },


        },
        toolbar: ["create"],
        columns:
            [{
                field: "carId",
                filterable: {
                    cell: {
                        showOperators: false
                    }
                }
            },
                {
                    field: "mark",
                    filterable: {
                        cell: {
                            operator: "contains",
                            suggestionOperator: "contains",
                           // showOperators: false
                        }
                    }
                },
                {
                    field: "model",
                    filterable: {
                        cell: {
                            operator: "contains",
                            suggestionOperator: "contains",
                           // showOperators: false
                        }
                    }
                },
                {
                    field: "watch",
                    filterable: {
                        cell: {
                            showOperators: false
                        }
                    }
                },
                {
                    field: "year",
                    filterable: {
                        cell: {
                            showOperators: false
                        }
                    }
                },
                {
                    title:"Цена",
                    field: "cost",
                    filterable: {
                        cell: {
                            showOperators: false
                        }
                    }
                },
                {
                    field: "state",
                    filterable: {
                        cell: {
                            operator: "contains",
                            suggestionOperator: "contains",
                           // showOperators: false
                        }
                    }
                },
                {
                    field: "mileage",
                    filterable: {
                        cell: {
                           // showOperators: false
                        }
                    }
                },
                {
                    field: "type",
                    filterable: {
                        cell: {
                            operator: "contains",
                            suggestionOperator: "contains",
                           // showOperators: false
                        }
                    }
                },
                {
                    field: "amount",
                    filterable: {
                        cell: {
                            showOperators: false
                        }
                    }
                },
                {
                    field: "transmission",
                    filterable: {
                        cell: {
                            operator: "contains",
                            suggestionOperator: "contains",
                            //showOperators: false
                        }
                    },
                   // editor: customEditor
                },
                {
                    field: "photoUrl",
                    sortable:false,
                    filterable:false,
                    template: "<img width='100px' src='#: photoUrl #'></img>",

                },
                { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" }
            ]
    });
    return div;
}







           
