<!-- BEGIN CONTENT -->
<div class="page-content-wrapper country-alias hidden">
    <!-- BEGIN CONTENT BODY -->
    <div class="page-content">

        <!-- BEGIN TABLE TITLE-->
        <h1 class="page-title">Manage Country Names</h1>
        <!-- END TABLE TITLE-->

        <!-- BEGIN SELECT SITE AND TABLE PORTLET-->
        <div class="portlet light bordered">
            <div class="portlet-title">
                <ul class="table_import_filters_container">
                    <li>
                        <div class="form-group">
                            <label class="control-label">Country</label>
                            <select class="form-control select-country select2 table_import_filter_select"></select>
                            <script class="template-select-country" type="text/template7">
                               <option value="-"> -- select -- </option>
                               {{#each countries}}
                               <option value="{{code}}">{{name}} </option>
                               {{/each}}
                            </script>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="portlet-body">
                <div class="panel panel-default">
                    <div class="row">
                        <div class="col-md-6">
                            <label>Country Alias</label>
                            <input type="text" class="form-control country-alias-name"/>
                        </div>
                        <div class="col-md-6">
                            <label>&nbsp;</label>
                            <button class="btn btn-primary save">Save Alias</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END SELECT SITE AND TABLE PORTLET-->
    </div>
    <!-- END CONTENT BODY -->
</div>
<!-- end content -->
